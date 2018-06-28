import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

export type Registry = {
  indexes: { [key: string]: number };
  paths: string[];
  deps: number[][];
  size: number;
};

export type DepsTree = { [key: string]: DepsTree } | string | null;

type FolderDeps = { [key: string]: FolderDeps | FileDeps };

class FileDeps {
  imports: string[] = [];
}

let EXTENSION_TO_SCRIPT_KIND = {
  js: ts.ScriptKind.JS,
  jsx : ts.ScriptKind.JSX,
  es6: ts.ScriptKind.JS,
  ts: ts.ScriptKind.TS,
  tsx: ts.ScriptKind.TSX
};

/**
 * Analyzes a directory of JS/TS files and returns the computed registry.
 */
export default function analyzeDirectory(directoryPath: string): Registry {
  let deps = getDirDeps(directoryPath, directoryPath);
  let registry = createRegistry(deps);
  removeDuplicateDeps(registry);
  return registry;
}

/**
 * Analyzes a specific JS/TS file and returns its dependencies.
 */
export function analyzeFile(filePath: string) {
  return getFileDeps(path.dirname(filePath), filePath);
}

/**
 * Analyzes a codebase starting from a specific JS/TS file (e.g. main.js) and
 * tracks down its dependencies at an arbitrary level of depth.
 */
export function analyzeTree(rootFilePath: string, depth = 3): DepsTree {
  let rootDirectoryPath = path.dirname(rootFilePath);
  let relativeFilePath = path.basename(rootFilePath);
  return {
    ['./' + relativeFilePath]: analyzeTreeInternal(rootDirectoryPath, relativeFilePath, depth)
  };
}

function analyzeTreeInternal(rootDirectoryPath: string, relativeFilePath: string, depth: number): DepsTree {
  if (depth <= 0) {
    return null;
  }
  let deps = getFileDeps(rootDirectoryPath, path.join(rootDirectoryPath, relativeFilePath));
  if (!deps) {
    return null;
  }
  let tree = {};
  for (let importPath of deps.imports) {
    let importedFilePath = pathFromImportPath(rootDirectoryPath, importPath);
    if (importedFilePath) {
      let relativeImportedFilePath = path.relative(rootDirectoryPath, importedFilePath);
      if (!relativeImportedFilePath.startsWith('../')) {
        relativeImportedFilePath = './' + relativeImportedFilePath;
      }
      tree[relativeImportedFilePath] = analyzeTreeInternal(rootDirectoryPath, relativeImportedFilePath, depth - 1);
    }
  }
  return tree;
}

function pathFromImportPath(rootDirectoryPath: string, importPath: string): string | null {
  if (importPath.startsWith('@')) {
    return null;
  }
  for (let extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
    let potentialFilePath = path.join(rootDirectoryPath, importPath + '.' + extension);
    if (fs.existsSync(potentialFilePath)) {
      return potentialFilePath;
    }
  }
  return null;
}

/**
 * Finds the dependencies of every file in a directory.
 * 
 * @param rootDirectoryPath The absolute path of the root directory from which we started the analysis.
 * @param currentDirectoryPath The absolute path of the current directory we're looking at.
 */
function getDirDeps(rootDirectoryPath: string, currentDirectoryPath: string): FolderDeps {
  let folderDeps: FolderDeps = {};
  for (let childName of fs.readdirSync(currentDirectoryPath)) {
    let childPath = path.join(currentDirectoryPath, childName);
    let lstat = fs.lstatSync(childPath);
    if (lstat.isFile()) {
      try {
        let fileDeps = getFileDeps(rootDirectoryPath, childPath);
        if (fileDeps === null) {
          continue;
        }
        let childNameWithoutExtension;
        let extensionPosition = childName.lastIndexOf(".");
        if (extensionPosition > -1) {
          childNameWithoutExtension = childName.substr(0, extensionPosition);
        } else {
          childNameWithoutExtension = childName;
        }
        folderDeps[childNameWithoutExtension] = fileDeps;
      } catch (e) {
        console.error("Could not parse " + childPath, e);
      }
    } else if (lstat.isDirectory() && childName != "node_modules") {
      folderDeps[childName] = getDirDeps(rootDirectoryPath, childPath);
    }
  }
  return folderDeps;
}

/**
 * Finds the depencies of a specific JS/TS file.
 * 
 * @param rootDirectoryPath The absolute path of the root directory from which we started the analysis.
 * @param filePath The absolute path of the file we're looking at.
 * @returns {@code null} if the file is not JavaScript or TypeScript
 */
function getFileDeps(rootDirectoryPath: string, filePath: string) {
  let parsed: ts.SourceFile | null = null;
  for (let extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
    if (filePath.endsWith('.' + extension)) {
      parsed = parseSourceFile(
        fs.readFileSync(filePath, 'utf8'),
        EXTENSION_TO_SCRIPT_KIND[extension]
      );
      break;
    }
  }
  if (!parsed) {
    // Ignore.
    return null;
  }
  let fileDeps = new FileDeps();
  for (let statement of parsed.statements) {
    if (ts.isImportDeclaration(statement)) {
      if (!ts.isStringLiteral(statement.moduleSpecifier)) {
        throw new Error(
          "Found an import that is not a string literal in " +
            filePath
        );
      }
      fileDeps.imports.push(
        relativePath(rootDirectoryPath, path.dirname(filePath), statement.moduleSpecifier.text)
      );
    } else if (ts.isVariableStatement(statement)) {
      for (let declaration of statement.declarationList.declarations) {
        if (
          declaration.initializer &&
          ts.isCallExpression(declaration.initializer) &&
          ts.isIdentifier(declaration.initializer.expression) &&
          declaration.initializer.expression.originalKeywordKind ==
            ts.SyntaxKind.RequireKeyword
        ) {
          for (let argument of declaration.initializer.arguments) {
            if (ts.isStringLiteral(argument)) {
              fileDeps.imports.push(relativePath(rootDirectoryPath, path.dirname(filePath), argument.text));
            }
          }
        }
      }
    }
  }
  return fileDeps;
}

function parseSourceFile(
  source: string,
  scriptKind: ts.ScriptKind
): ts.SourceFile {
  let sourceFile = ts.createSourceFile(
    "source.ts",
    source,
    ts.ScriptTarget.Latest,
    undefined,
    scriptKind
  );
  return sourceFile;
}

function relativePath(
  rootDirectoryPath: string,
  fromDirectoryPath: string,
  relativePathOrPackage: string
): string {
  let isPackage: boolean;
  if (
    !relativePathOrPackage.startsWith("./") &&
    !relativePathOrPackage.startsWith("../")
  ) {
    // This is an NPM package path.
    return "@" + relativePathOrPackage;
  }
  return path.relative(rootDirectoryPath, path.join(fromDirectoryPath, relativePathOrPackage));
}

function createRegistry(
  deps: FolderDeps,
  registry: Registry = { indexes: {}, paths: [], deps: [], size: 0 },
  path: string[] = []
): Registry {
  for (let key of Object.keys(deps)) {
    let entry = deps[key];
    if (entry instanceof FileDeps) {
      let currentPath = path.concat(key).join("/");
      let currentIndex = index(currentPath);
      for (let importPath of entry.imports) {
        // TODO: Remove duplicates.
        registry.deps[currentIndex].push(index(importPath));
      }
    } else {
      createRegistry(entry, registry, path.concat(key));
    }
  }

  function index(importPath: string): number {
    if (importPath[0] == "@") {
      let slashPosition = importPath.indexOf("/");
      if (slashPosition > -1) {
        importPath = importPath.substr(0, slashPosition);
      }
    }
    if (registry.indexes[importPath] === undefined) {
      let index = registry.size++;
      registry.indexes[importPath] = index;
      registry.paths[index] = importPath;
      registry.deps[index] = [];
    }
    return registry.indexes[importPath];
  }

  return registry;
}

function removeDuplicateDeps(registry: Registry): void {
  for (let i = 0; i < registry.size; i++) {
    registry.deps[i] = Array.from(new Set(registry.deps[i]));
  }
}
