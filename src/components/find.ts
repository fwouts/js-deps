import scc = require("strongly-connected-components");
import { analyzeDirectory } from "../deps/analyze";

let sourceDirectory = process.argv[2];

let registry = analyzeDirectory(sourceDirectory);
const { components, adjacencyList } = scc(registry.deps);
for (const componentIndex of Object.keys(components)) {
  const paths = [];
  for (const nodeIndex of components[componentIndex]) {
    paths.push(registry.paths[nodeIndex]);
  }
  console.log(componentIndex, paths);
}
