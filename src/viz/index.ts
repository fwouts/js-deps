import * as Dracula from "graphdracula";

import { DEPS } from "./_generated_deps";

var graph = new Dracula.Graph();

console.log(DEPS);
for (let path of Object.keys(DEPS)) {
  for (let depPath of DEPS[path]) {
    graph.addEdge(path, depPath);
  }
}

var layouter: Dracula.Layout.Spring = new Dracula.Layout.Spring(graph);
layouter.layout();

let element = <HTMLDivElement>document.getElementById("graph");
var renderer = new Dracula.Renderer.Raphael(
  "#graph",
  graph,
  element.offsetWidth,
  element.offsetHeight
);
renderer.draw();
console.log(renderer);
