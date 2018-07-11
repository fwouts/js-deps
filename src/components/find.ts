import scc = require("strongly-connected-components");
import { analyzeDirectory } from "../deps/analyze";

let sourceDirectory = process.argv[2];

// Analyze a directory and group circular dependencies into components.
let registry = analyzeDirectory(sourceDirectory);
const { components, adjacencyList } = scc(registry.deps);
for (const componentIndex of Object.keys(components)) {
  const paths = [];
  for (const nodeIndex of components[componentIndex]) {
    paths.push(registry.paths[nodeIndex]);
  }
  // The paths in each component have circular dependencies and cannot be split
  // into smaller pieces.
  console.log(componentIndex, paths);
}
