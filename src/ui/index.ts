import * as contract from "../api/contract";
import * as vis from "vis";

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
      if (!registry.size) {
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
