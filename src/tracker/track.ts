import { analyzeTree, DepsTree } from "../deps/analyze";
import TextBuilder from 'textbuilder';

let sourceFile = process.argv[2];
let depth = parseInt(process.argv[3] || '3');

let tree = analyzeTree(sourceFile, depth);

let t = new TextBuilder();
buildTextTree(tree, t);

console.log(`Tree of dependencies from ${sourceFile} (depth: ${depth}):\n`);
console.log(t.build());

function buildTextTree(tree: DepsTree, t: TextBuilder, displayedPaths = new Set<string>()) {
  if (tree === null) {
    // Don't output anything.
  } else if (typeof tree === 'string') {
    t.append(tree);
  } else {
    for (let path of Object.keys(tree)) {
      let alreadyShowedPath = displayedPaths.has(path);
      if (alreadyShowedPath) {
        t.append(path, ' [listed above]')
        t.linebreak();
      } else {
        t.append(path);
        displayedPaths.add(path);
        t.indented(() => buildTextTree(tree[path], t, displayedPaths));
      }
    }
  }
}
