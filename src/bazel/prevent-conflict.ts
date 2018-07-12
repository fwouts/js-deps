import * as path from "path";
import { RulesNode } from "./rule-nodes";

export function preventConflicts(
  rootDirs: { [ruleId: number]: string },
  rulesNode: RulesNode
) {
  // Important: we're going breadth first because we need rules to bubble up
  // if necessary.
  for (const node of Object.values(rulesNode.children)) {
    preventConflicts(rootDirs, node);
  }

  for (const rule of rulesNode.rules) {
    for (const filePath of rule.srcs) {
      const slashPosition = filePath.indexOf("/");
      const dirName = filePath.substr(0, slashPosition);
      if (rulesNode.children[dirName]) {
        // The fact that this child exists means that there are rules in there.
        // Move them out so we can access the file.
        moveRulesUp(rootDirs, rulesNode, dirName);
      }
    }
  }
}

function moveRulesUp(
  rootDirs: { [ruleId: number]: string },
  rulesNode: RulesNode,
  childName: string
) {
  const childNode = rulesNode.children[childName];
  for (const grandChildName of Object.keys(childNode.children)) {
    moveRulesUp(rootDirs, childNode, grandChildName);
  }
  for (const childRule of childNode.rules) {
    rulesNode.rules.push({
      ruleId: childRule.ruleId,
      srcs: childRule.srcs.map(src => `${childName}/${src}`),
      deps: childRule.deps
    });
    rootDirs[childRule.ruleId] = path.dirname(rootDirs[childRule.ruleId]) + "/";
  }
  delete rulesNode.children[childName];
}
