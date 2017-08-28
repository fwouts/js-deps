import * as ts from "typescript";

import { ImmutableDirectory, ImmutableFile, io } from "nofiles";

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
  let directory = io.read(directoryPath) as ImmutableDirectory;
  let deps = getDeps(directory);
  let registry = createRegistry(deps);
  removeDuplicateDeps(registry);
  return registry;
}

function getDeps(source: ImmutableDirectory, path: string[] = []): FolderDeps {
  let folderDeps: FolderDeps = {};
  for (let [childName, child] of source.list().entries()) {
    let childPath = path.concat(childName);
    if (child instanceof ImmutableFile) {
      try {
        let parsed: ts.SourceFile;
        if (childName.endsWith(".js")) {
          parsed = parseSourceFile(
            child.getBuffer().toString("utf8"),
            ts.ScriptKind.JS
          );
        } else if (childName.endsWith(".ts")) {
          parsed = parseSourceFile(
            child.getBuffer().toString("utf8"),
            ts.ScriptKind.TS
          );
        } else if (childName.endsWith(".jsx")) {
          parsed = parseSourceFile(
            child.getBuffer().toString("utf8"),
            ts.ScriptKind.JSX
          );
        } else if (childName.endsWith(".tsx")) {
          parsed = parseSourceFile(
            child.getBuffer().toString("utf8"),
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
                  childPath.join("/")
              );
            }
            fileDeps.imports.push(
              absolutePath(path, statement.moduleSpecifier.text)
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
                    fileDeps.imports.push(absolutePath(path, argument.text));
                  }
                }
              }
            }
          }
        }
        folderDeps[childName] = fileDeps;
      } catch (e) {
        console.error("Could not parse " + childPath.join("/"), e);
      }
    } else if (childName != "node_modules") {
      folderDeps[childName] = getDeps(child, childPath);
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

function absolutePath(
  currentPath: string[],
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
  while (relativePathOrPackage.startsWith(".")) {
    if (relativePathOrPackage.startsWith("./")) {
      // This is the current directory. Nothing left to do.
      relativePathOrPackage = relativePathOrPackage.substr(2);
    } else if (relativePathOrPackage.startsWith("../")) {
      // Pop one directory off the top of the current path.
      if (currentPath.length == 0) {
        throw new Error("Too many levels of ../../.. in imports");
      }
      relativePathOrPackage = relativePathOrPackage.substr(3);
      currentPath = currentPath.slice(0, currentPath.length - 1);
    }
  }
  return (
    (currentPath.length ? currentPath.join("/") + "/" : "") +
    relativePathOrPackage
  );
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

  function index(path: string): number {
    if (path[0] == "@") {
      let slashPosition = path.indexOf("/");
      if (slashPosition > -1) {
        path = path.substr(0, slashPosition);
      }
    } else {
      let extensionPosition = path.lastIndexOf(".");
      if (extensionPosition > -1) {
        path = path.substr(0, extensionPosition);
      }
    }
    if (registry.indexes[path] === undefined) {
      let index = registry.size++;
      registry.indexes[path] = index;
      registry.paths[index] = path;
      registry.deps[index] = [];
    }
    return registry.indexes[path];
  }

  return registry;
}

function removeDuplicateDeps(registry: Registry): void {
  for (let i = 0; i < registry.size; i++) {
    registry.deps[i] = Array.from(new Set(registry.deps[i]));
  }
}
