import * as contract from "../api/contract";
import * as vis from "vis";

let depsRequest: contract.DepsRequest = {
  path: "/Users/work/GitHub/deps/src"
};
fetch("/deps", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(depsRequest)
})
  .then(response => response.json())
  .then((response: contract.DepsResponse) => {
    let registry = response.registry;
    let nodesData: {}[] = [];
    let edgesData: {}[] = [];
    for (let i = 0; i < registry.size; i++) {
      nodesData.push({
        id: i,
        label: registry.paths[i]
      });
      for (let dep of registry.deps[i]) {
        edgesData.push({
          from: i,
          to: dep,
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
  })
  .catch(e => {
    console.error(e);
  });
