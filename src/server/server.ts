import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as contract from "../api/contract";
import { analyzeDirectory, Registry } from "../deps/analyze";

const app = express();
app.use("/", express.static("dist"));
app.use(bodyParser.json());

app.get("/sourcepath", (req, res) => {
  respondJson<contract.GetSourcePathResponse>(res, {
    path: path.dirname(__dirname) // src directory
  });
});

app.post("/deps", (req, res) => {
  let request = req.body as contract.DepsRequest;
  let registry: Registry;
  try {
    registry = analyzeDirectory(request.path);
  } catch (e) {
    console.error(e);
    registry = { indexes: {}, paths: [], deps: [], size: 0 };
  }
  respondJson<contract.DepsResponse>(res, {
    registry
  });
});

app.listen(3003, () => {
  console.log("Ready to serve.");
});

function respondJson<T>(res: express.Response, data: T) {
  // Note: we could use res.json(store) if we didn't want it formatted nicely.
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data, null, 2));
}
