import * as vis from "vis";
import * as contract from "../api/contract";

let pathInput = <HTMLInputElement>document.getElementById("path");
let form = <HTMLFormElement>document.getElementById("form");
let graphContainer = document.getElementById("graph")!;
let loader = document.getElementById("loader")!;

form.addEventListener("submit", e => {
  e.preventDefault();
  loadDeps(pathInput.value);
});
fetch("/sourcepath")
  .then(response => response.json())
  .then((response: contract.GetSourcePathResponse) => {
    pathInput.value = response.path;
    loadDeps(response.path);
  });

function loadDeps(path: string) {
  showLoader();
  let depsRequest: contract.DepsRequest = {
    path
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
      let nodesDataById: { [key: number]: {} } = {};
      let edgesData: {}[] = [];
      let isolatedNodeIds = new Set<number>();
      for (let id = 0; id < registry.size; id++) {
        isolatedNodeIds.add(id);
      }
      for (let id = 0; id < registry.size; id++) {
        let label = registry.paths[id];
        let isPackage = label.startsWith("@");
        let isExternal = label.startsWith("../");
        nodesDataById[id] = {
          id: id,
          label,
          color: {
            background: isPackage ? "#fa4" : isExternal ? "#000" : "#48f"
          },
          font: {
            color: isPackage ? "#000" : "#fff"
          }
        };
        let depIds = registry.deps[id];
        if (depIds.length) {
          // This node is not isolated.
          isolatedNodeIds.delete(id);
        }
        for (let depId of depIds) {
          isolatedNodeIds.delete(depId);
          edgesData.push({
            from: id,
            to: depId,
            arrows: "to"
          });
        }
      }
      for (let id of isolatedNodeIds) {
        delete nodesDataById[id];
      }
      let nodesData = Array.from(Object.values(nodesDataById));
      if (!nodesData.length) {
        nodesData.push({
          id: 0,
          label: "No JS or TS files found"
        });
      }

      let nodes = new vis.DataSet(nodesData);
      let edges = new vis.DataSet(edgesData);
      let data: vis.Data = {
        nodes: nodes,
        edges: edges
      };
      let options: vis.Options = {};
      let network = new vis.Network(graphContainer, data, options);
      hideLoader();
    })
    .catch(e => {
      console.error(e);
      hideLoader();
    });
}

function showLoader() {
  graphContainer.style.display = "none";
  loader.style.display = "block";
}

function hideLoader() {
  graphContainer.style.display = "block";
  loader.style.display = "none";
}
