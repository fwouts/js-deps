import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

export type Registry = {
  indexes: { [key: string]: number };
  importPaths: string[];
  realPaths: string[];
  deps: number[][];
  size: number;
};

export type DepsTree = { [key: string]: DepsTree } | string | null;

// A node can be either a file or a directory, or both (e.g. home/ + home.jsx in the same
// directory).
type NodeDeps = {
  file?: FileDeps;
  children: DirDeps;
};

type DirDeps = {
  [key: string]: NodeDeps;
};

type FileDeps = {
  extension: string;
  imports: string[];
};

let EXTENSION_TO_SCRIPT_KIND = {
  js: ts.ScriptKind.JS,
  jsx: ts.ScriptKind.JSX,
  es6: ts.ScriptKind.JS,
  ts: ts.ScriptKind.TS,
  tsx: ts.ScriptKind.TSX
};

/**
 * Analyzes a directory of JS/TS files and returns the computed registry.
 */
export function analyzeDirectory(directoryPath: string): Registry {
  let deps = {
    children: getDirDeps(directoryPath, directoryPath)
  };
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
    ["./" + relativeFilePath]: analyzeTreeInternal(
      rootDirectoryPath,
      relativeFilePath,
      depth
    )
  };
}

function analyzeTreeInternal(
  rootDirectoryPath: string,
  relativeFilePath: string,
  depth: number
): DepsTree {
  if (depth <= 0) {
    return null;
  }
  let deps = getFileDeps(
    rootDirectoryPath,
    path.join(rootDirectoryPath, relativeFilePath)
  );
  if (!deps) {
    return null;
  }
  let tree = {};
  for (let importPath of deps.imports) {
    let importedFilePath = pathFromImportPath(rootDirectoryPath, importPath);
    if (importedFilePath) {
      let relativeImportedFilePath = path.relative(
        rootDirectoryPath,
        importedFilePath
      );
      if (!relativeImportedFilePath.startsWith("../")) {
        relativeImportedFilePath = "./" + relativeImportedFilePath;
      }
      tree[relativeImportedFilePath] = analyzeTreeInternal(
        rootDirectoryPath,
        relativeImportedFilePath,
        depth - 1
      );
    }
  }
  return tree;
}

function pathFromImportPath(
  rootDirectoryPath: string,
  importPath: string
): string | null {
  if (importPath.startsWith("@")) {
    return null;
  }
  // Try adding an extension to the path to find the file.
  for (let extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
    let potentialFilePath = path.join(
      rootDirectoryPath,
      importPath + "." + extension
    );
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
function getDirDeps(
  rootDirectoryPath: string,
  currentDirectoryPath: string
): DirDeps {
  let dirDeps: DirDeps = {};
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
        addDeps(dirDeps, childNameWithoutExtension, {
          file: fileDeps,
          children: {}
        });
      } catch (e) {
        console.error("Could not parse " + childPath, e);
      }
    } else if (lstat.isDirectory() && childName != "node_modules") {
      const nestedDirDeps = getDirDeps(rootDirectoryPath, childPath);
      addDeps(dirDeps, childName, { children: nestedDirDeps });
    }
  }
  return dirDeps;
}

function addDeps(dirDeps: DirDeps, childName: string, nestedDeps: NodeDeps) {
  if (!dirDeps[childName]) {
    dirDeps[childName] = nestedDeps;
  } else {
    if (nestedDeps.file) {
      dirDeps[childName].file = nestedDeps.file;
    }
    for (const [grandChildName, grandChildDeps] of Object.entries(
      nestedDeps.children
    )) {
      addDeps(dirDeps[childName].children, grandChildName, grandChildDeps);
    }
  }
}

/**
 * Finds the depencies of a specific JS/TS file.
 *
 * @param rootDirectoryPath The absolute path of the root directory from which we started the analysis.
 * @param filePath The absolute path of the file we're looking at.
 * @returns {@code null} if the file is not JavaScript or TypeScript
 */
function getFileDeps(
  rootDirectoryPath: string,
  filePath: string
): FileDeps | null {
  let parsed: ts.SourceFile | null = null;
  for (let extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
    if (filePath.endsWith("." + extension)) {
      parsed = parseSourceFile(
        fs.readFileSync(filePath, "utf8"),
        EXTENSION_TO_SCRIPT_KIND[extension]
      );
      break;
    }
  }
  if (!parsed) {
    // Ignore.
    return null;
  }
  let fileDeps: FileDeps = {
    extension: path.extname(filePath),
    imports: []
  };
  for (let statement of parsed.statements) {
    if (ts.isImportDeclaration(statement)) {
      // import ... from 'path';
      if (!ts.isStringLiteral(statement.moduleSpecifier)) {
        throw new Error(
          "Found an import that is not a string literal in " + filePath
        );
      }
      fileDeps.imports.push(
        relativePath(
          rootDirectoryPath,
          path.dirname(filePath),
          statement.moduleSpecifier.text
        )
      );
    } else if (ts.isExportDeclaration(statement) && statement.moduleSpecifier) {
      // export ... from 'path';
      if (!ts.isStringLiteral(statement.moduleSpecifier)) {
        throw new Error(
          "Found an import that is not a string literal in " + filePath
        );
      }
      fileDeps.imports.push(
        relativePath(
          rootDirectoryPath,
          path.dirname(filePath),
          statement.moduleSpecifier.text
        )
      );
    } else if (ts.isVariableStatement(statement)) {
      // var a = require(...);
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
              fileDeps.imports.push(
                relativePath(
                  rootDirectoryPath,
                  path.dirname(filePath),
                  argument.text
                )
              );
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
  if (
    !relativePathOrPackage.startsWith("./") &&
    !relativePathOrPackage.startsWith("../")
  ) {
    // This is an NPM package path or an alias.
    return "@" + relativePathOrPackage;
  }
  return path.relative(
    rootDirectoryPath,
    findSource(path.join(fromDirectoryPath, relativePathOrPackage))
  );
}

function findSource(importPath: string) {
  if (isExistingFile(importPath)) {
    return importPath;
  }
  for (const extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
    if (isExistingFile(importPath + "." + extension)) {
      return importPath;
    }
  }
  for (const extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
    if (isExistingFile(importPath + "/index." + extension)) {
      return importPath + "/index";
    }
  }
  throw new Error(`Could not find ${importPath}`);
}

function isExistingFile(filePath: string) {
  return fs.existsSync(filePath) && fs.lstatSync(filePath).isFile();
}

function createRegistry(
  deps: NodeDeps,
  registry: Registry = {
    indexes: {},
    importPaths: [],
    realPaths: [],
    deps: [],
    size: 0
  },
  pathFromRoot: string[] = []
): Registry {
  for (let key of Object.keys(deps.children)) {
    let entry = deps.children[key];
    if (entry.file) {
      let currentPath = pathFromRoot.concat(key).join("/");
      let currentIndex = index(currentPath, entry.file.extension);
      for (let importPath of entry.file.imports) {
        registry.deps[currentIndex].push(index(importPath));
      }
    }
    createRegistry(entry, registry, pathFromRoot.concat(key));
  }

  function index(importPath: string, extension?: string): number {
    if (importPath.startsWith("@@/")) {
      // Special case: This is an absolute import (e.g. @/src/something).
      // TODO: Generalise this to any alias.
      importPath = "src/" + importPath.substr(3);
    }
    if (importPath[0] === "@") {
      let slashPosition = importPath.indexOf("/");
      if (importPath[1] === "@") {
        // We expect the package name to be @company/package.
        slashPosition = importPath.indexOf("/", slashPosition + 1);
      }
      if (slashPosition > -1) {
        importPath = importPath.substr(0, slashPosition);
      }
    } else {
      // In case of a statement like "import * from './script.jsx'", we want to
      // make sure it becomes "import * from './script'" to avoid duplication
      // of nodes (./script and ./script.jsx are the same thing).
      for (const extension of Object.keys(EXTENSION_TO_SCRIPT_KIND)) {
        if (importPath.endsWith("." + extension)) {
          importPath = importPath.substr(
            0,
            importPath.length - 1 - extension.length
          );
          break;
        }
      }
    }
    let index = registry.indexes[importPath];
    if (index === undefined) {
      index = registry.size++;
      registry.indexes[importPath] = index;
      registry.importPaths[index] = importPath;
      registry.realPaths[index] = importPath;
      registry.deps[index] = [];
    }
    if (extension) {
      registry.realPaths[index] = registry.importPaths[index] + extension;
    }
    return index;
  }

  return registry;
}

function removeDuplicateDeps(registry: Registry): void {
  for (let i = 0; i < registry.size; i++) {
    registry.deps[i] = Array.from(new Set(registry.deps[i]));
  }
}
