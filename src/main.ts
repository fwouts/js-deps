import * as ts from "typescript";

import { ImmutableDirectory, ImmutableFile, io } from "nofiles";

const SRC_DIRECTORY = "/Users/work/GitHub/modular/codegen/src";

type Registry = {
  indexes: { [key: string]: number };
  paths: { [key: number]: string };
  deps: { [key: number]: Set<number> };
  size: number;
};

type FolderDeps = { [key: string]: FolderDeps | FileDeps };

class FileDeps {
  imports: string[] = [];
}

let deps = getDeps(io.read(SRC_DIRECTORY) as ImmutableDirectory);
let registry = createRegistry(deps);
console.log(registry);

function getDeps(source: ImmutableDirectory, path: string[] = []): FolderDeps {
  let folderDeps: FolderDeps = {};
  for (let [childName, child] of source.list().entries()) {
    if (child instanceof ImmutableFile) {
      let parsed: ts.SourceFile;
      let text = child.getBuffer().toString("utf8");
      if (childName.endsWith(".js")) {
        parsed = parseSourceFile(text, ts.ScriptKind.JS);
      } else if (childName.endsWith(".ts")) {
        parsed = parseSourceFile(text, ts.ScriptKind.TS);
      } else if (childName.endsWith(".jsx")) {
        parsed = parseSourceFile(text, ts.ScriptKind.JSX);
      } else if (childName.endsWith(".tsx")) {
        parsed = parseSourceFile(text, ts.ScriptKind.TSX);
      } else {
        // Ignore.
        continue;
      }
      let fileDeps = new FileDeps();
      for (let statement of parsed.statements) {
        if (ts.isImportDeclaration(statement)) {
          if (!ts.isStringLiteral(statement.moduleSpecifier)) {
            throw new Error(
              "Found an import that is not a string literal: " +
                statement.moduleSpecifier
            );
          }
          fileDeps.imports.push(
            absolutePath(path, statement.moduleSpecifier.text)
          );
        }
      }
      folderDeps[childName] = fileDeps;
    } else {
      folderDeps[childName] = getDeps(child, path.concat(childName));
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
  registry: Registry = { indexes: {}, paths: {}, deps: {}, size: 0 },
  path: string[] = []
): Registry {
  for (let key of Object.keys(deps)) {
    let entry = deps[key];
    if (entry instanceof FileDeps) {
      let currentPath = path.concat(key).join("/");
      let currentIndex = index(currentPath);
      for (let importPath of entry.imports) {
        registry.deps[currentIndex].add(index(importPath));
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
      registry.deps[index] = new Set();
    }
    return registry.indexes[path];
  }

  return registry;
}
