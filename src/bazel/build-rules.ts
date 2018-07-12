import scc = require("strongly-connected-components");
import * as path from "path";
import { Registry } from "../deps/analyze";
import { preventConflicts } from "./prevent-conflict";
import { createRulesNode, recordRule, RulesNode } from "./rule-nodes";
import commonPrefix = require("common-prefix");

export type Rules = {
  /**
   * The root directory of each rule (must contain all its source files).
   */
  rootDirs: { [ruleId: number]: string };

  /**
   * Map of ruleId to module name. Only rules that represent modules will be present.
   */
  moduleRules: { [ruleId: number]: string };

  /**
   * Map of ruleId to rule name. Only rules that represent source files will be present.
   */
  ruleNames: { [ruleId: number]: string };

  /**
   * Root of the rules tree.
   */
  tree: RulesNode;
};

export function buildRules(registry: Registry): Rules {
  // Each component contains a list of node indexes, each representing a file (or
  // an NPM module). Most components will only contain one file—if it contains
  // several, it's because these files have a circular dependency.
  const { components, adjacencyList } = scc(registry.deps);

  // Create a rules tree. This will be used to generate Bazel build rules.
  // Each node of the rules tree corresponds to a directory.
  const rulesTree = createRulesNode();
  const rootDirs: { [ruleId: number]: string } = [];
  const moduleRules: { [ruleId: number]: string } = [];
  const ruleNames: { [ruleId: number]: string } = [];

  // Loop through each component, figuring out in which directory its files live
  // and adding it in the appropriate location in the rules tree.
  for (let ruleId = 0; ruleId < components.length; ruleId++) {
    let componentRootDirPath: string | null = null;
    let componentModule: string | null = null;
    const paths = [];

    for (const nodeIndex of components[ruleId]) {
      const filePath = registry.realPaths[nodeIndex];
      if (filePath.startsWith("@")) {
        // We don't need to define rules for NPM modules.
        componentModule = filePath.substr(1);
        continue;
      }
      // Pick the first file's name as the rule name.
      if (!ruleNames[ruleId]) {
        ruleNames[ruleId] = path.parse(
          path.basename(registry.realPaths[nodeIndex])
        ).name;
      }
      paths.push(filePath);

      // Figure out the common ancestor directory.
      if (!componentRootDirPath) {
        componentRootDirPath = path.dirname(filePath) + "/";
      } else {
        componentRootDirPath = commonPrefix([
          componentRootDirPath,
          path.dirname(filePath) + "/"
        ]);
      }
    }

    if (!componentRootDirPath) {
      if (componentModule) {
        // This is just an NPM module.
        moduleRules[ruleId] = componentModule;
      } else {
        throw new Error();
      }
      continue;
    }

    // Place the rule in the tree and record where we've placed it.
    rootDirs[ruleId] = componentRootDirPath;
    recordRule(
      rulesTree,
      {
        ruleId,
        srcs: paths.map(p => path.relative(componentRootDirPath!, p)),
        deps: adjacencyList[ruleId]
      },
      componentRootDirPath
    );
  }

  // Explore the tree and whenever we find a rule that uses files from another
  // directory that itself has rules, move these rules up.
  //
  // This is necessary because Bazel prevents access to files that live in a
  // directory that has a BUILD.bazel file.
  preventConflicts(rootDirs, rulesTree);

  return {
    rootDirs,
    moduleRules,
    ruleNames,
    tree: rulesTree
  };
}
