import * as vis from "vis";

import { DEPS } from "./_generated_deps";

let allPaths = new Set<string>();
for (let path of Object.keys(DEPS)) {
  allPaths.add(path);
  for (let depPath of DEPS[path]) {
    allPaths.add(depPath);
  }
}

let nodesData: {}[] = Array.from(allPaths).map(path => {
  return { id: path, label: path };
});
let edgesData: {}[] = [];
for (let path of Object.keys(DEPS)) {
  for (let depPath of DEPS[path]) {
    edgesData.push({
      from: path,
      to: depPath,
      arrows: "to"
    });
  }
}

let nodes = new vis.DataSet(nodesData);
let edges = new vis.DataSet(edgesData);
let container = document.getElementById("graph")!;
let data: vis.Data = {
  nodes: nodes,
  edges: edges
};
let options: vis.Options = {};
let network = new vis.Network(container, data, options);
