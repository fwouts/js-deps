/**
 * Recursively records the given rule in the tree, following the tree path.
 *
 * @param tree The tree to record the rule into.
 * @param rule The rule to record.
 * @param treePath A slash-separated string representing the path in the tree.
 */
export function recordRule(
  tree: RulesNode,
  rule: Rule,
  treePath: string,
  originalTreePath = treePath
) {
  if (!treePath || treePath === "/" || treePath === "./") {
    tree.rules.push(rule);
  } else {
    const slashPosition = treePath.indexOf("/");
    const head = treePath.substr(0, slashPosition);
    const tail = treePath.substr(slashPosition + 1);
    if (!tree.children[head]) {
      tree.children[head] = createRulesNode();
    }
    recordRule(tree.children[head], rule, tail, originalTreePath);
  }
}

export function createRulesNode(): RulesNode {
  return {
    rules: [],
    children: {}
  };
}

export type RelativePath = string;

export type GroupIndex = number;

export type Rule = {
  ruleId: number;
  srcs: RelativePath[];
  deps: GroupIndex[];
};

export type RulesNode = {
  rules: Rule[];
  children: {
    [key: string]: RulesNode;
  };
};
