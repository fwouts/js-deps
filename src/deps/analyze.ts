import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

export type Registry = {
  indexes: { [key: string]: number };
  paths: string[];
  deps: number[][];
  size: number;
};

type FolderDeps = { [key: string]: FolderDeps | FileDeps };

class FileDeps {
  imports: string[] = [];
}

export default function analyze(directoryPath: string): Registry {
  let deps = getDeps(directoryPath, directoryPath);
  let registry = createRegistry(deps);
  removeDuplicateDeps(registry);
  return registry;
}

function getDeps(rootDirectoryPath: string, currentDirectoryPath: string): FolderDeps {
  let folderDeps: FolderDeps = {};
  for (let childName of fs.readdirSync(currentDirectoryPath)) {
    let childPath = path.join(currentDirectoryPath, childName);
    let lstat = fs.lstatSync(childPath);
    if (lstat.isFile()) {
      try {
        let parsed: ts.SourceFile;
        if (childName.endsWith(".js") || childName.endsWith(".es6")) {
          parsed = parseSourceFile(
            fs.readFileSync(childPath, 'utf8'),
            ts.ScriptKind.JS
          );
        } else if (childName.endsWith(".ts")) {
          parsed = parseSourceFile(
            fs.readFileSync(childPath, 'utf8'),
            ts.ScriptKind.TS
          );
        } else if (childName.endsWith(".jsx")) {
          parsed = parseSourceFile(
            fs.readFileSync(childPath, 'utf8'),
            ts.ScriptKind.JSX
          );
        } else if (childName.endsWith(".tsx")) {
          parsed = parseSourceFile(
            fs.readFileSync(childPath, 'utf8'),
            ts.ScriptKind.TSX
          );
        } else {
          // Ignore.
          continue;
        }
        let fileDeps = new FileDeps();
        for (let statement of parsed.statements) {
          if (ts.isImportDeclaration(statement)) {
            if (!ts.isStringLiteral(statement.moduleSpecifier)) {
              throw new Error(
                "Found an import that is not a string literal in " +
                  childPath
              );
            }
            fileDeps.imports.push(
              relativePath(rootDirectoryPath, currentDirectoryPath, statement.moduleSpecifier.text)
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
                    fileDeps.imports.push(relativePath(rootDirectoryPath, currentDirectoryPath, argument.text));
                  }
                }
              }
            }
          }
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
      folderDeps[childName] = getDeps(rootDirectoryPath, childPath);
    }
  }
  return folderDeps;
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
