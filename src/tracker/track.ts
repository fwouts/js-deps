import { analyzeTree } from "../deps/analyze";

let sourceFile = process.argv[2];
let deps = analyzeTree(sourceFile);
for (let level = 0; level < deps.length; level++) {
  console.log(`Level ${level}:`);
  for (let filePath of deps[level]) {
    console.log(`- ${filePath}`);
  }
  console.log();
}
