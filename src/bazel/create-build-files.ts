import * as fs from "fs";
import TextBuilder from "textbuilder";
import { Rules } from "./build-rules";
import { Rule, RulesNode } from "./rule-nodes";

// Node modules that are automatically available in a Node environment.
// Synced from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e22846ad77459b3ece25598db93c2013e8c76716/types/node/index.d.ts.
const NODE_MODULES = new Set([
  "buffer",
  "querystring",
  "events",
  "http",
  "cluster",
  "zlib",
  "os",
  "https",
  "punycode",
  "repl",
  "readline",
  "vm",
  "child_process",
  "url",
  "dns",
  "net",
  "dgram",
  "fs",
  "path",
  "string_decoder",
  "tls",
  "crypto",
  "stream",
  "util",
  "assert",
  "tty",
  "domain",
  "constants",
  "module",
  "process",
  "v8",
  "timers",
  "console",
  "async_hooks",
  "http2",
  "perf_hooks"
]);

export function createBuildFiles(rules: Rules) {
  createBuildFilesInternal(rules, rules.tree, true);
}

function createBuildFilesInternal(
  rules: Rules,
  rulesNode: RulesNode,
  root: boolean
) {
  if (rulesNode.rules.length > 0) {
    createBuildFile(rules, rulesNode, root);
  }
  for (const childName of Object.keys(rulesNode.children)) {
    process.chdir(childName);
    createBuildFilesInternal(rules, rulesNode.children[childName], false);
    process.chdir("..");
  }
}

function createBuildFile(rules: Rules, rulesNode: RulesNode, root: boolean) {
  const t = new TextBuilder();
  let hasTypeScript = false;
  for (const rule of rulesNode.rules) {
    if (isTypeScript(rule)) {
      hasTypeScript = true;
    }
  }
  t.append(`package(default_visibility = ["//visibility:public"])

load("@bazel_javascript//:defs.bzl", "js_library", "ts_library")
`);
  for (const rule of rulesNode.rules) {
    outputRule(rules, t, rule);
  }
  if (root) {
    t.append(`\nload("@bazel_javascript//:defs.bzl", "npm_packages")

npm_packages(
  name = "packages",
  package_json = ":package.json",
  yarn_lock = ":yarn.lock",
)
`);
  }
  fs.writeFileSync("BUILD.bazel", t.build(), "utf8");
}

function outputRule(rules: Rules, t: TextBuilder, rule: Rule) {
  t.append(`\n${isTypeScript(rule) ? "ts" : "js"}_library(`);
  t.indented(() => {
    t.append(`name = "${ruleName(rules, rule.ruleId)}",\n`);
    t.append("srcs = [");
    t.indented(() => {
      for (const src of rule.srcs) {
        t.append(`"${src}",`);
      }
    });
    t.append("],\n");
    if (rule.deps.filter(dep => rules.rootDirs[dep]).length > 0) {
      t.append("deps = [");
      t.indented(() => {
        for (const dep of rule.deps) {
          if (rules.rootDirs[dep]) {
            t.append(`"${rulePath(rules, dep)}",\n`);
          }
        }
        t.append('"//:packages",\n');
      });
      t.append("],\n");
    }
    if (
      rule.deps.filter(
        dep =>
          rules.moduleRules[dep] && !NODE_MODULES.has(rules.moduleRules[dep])
      ).length > 0
    ) {
      t.append("requires = [");
      t.indented(() => {
        for (const dep of rule.deps) {
          if (
            rules.moduleRules[dep] &&
            !NODE_MODULES.has(rules.moduleRules[dep])
          ) {
            t.append(`"${rules.moduleRules[dep]}",\n`);
          }
        }
      });
      t.append("],\n");
    }
  });
  t.append(")\n");
}

function isTypeScript(rule: Rule) {
  for (const src of rule.srcs) {
    if (src.endsWith(".ts") || src.endsWith(".tsx")) {
      return true;
    }
  }
  return false;
}

function rulePath(rules: Rules, ruleId: number) {
  let dirPath = rules.rootDirs[ruleId];
  dirPath = dirPath.substr(0, dirPath.length - 1);
  if (dirPath === ".") {
    dirPath = "";
  }
  return `//${dirPath}:${ruleName(rules, ruleId)}`;
}

function ruleName(rules: Rules, ruleId: number) {
  if (!rules.ruleNames[ruleId]) {
    throw new Error(`No rule name for component ${ruleId}`);
  }
  return `${rules.ruleNames[ruleId]}_${ruleId}`;
}
