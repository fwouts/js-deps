import * as bodyParser from "body-parser";
import * as contract from "../api/contract";
import * as express from "express";

import analyze from "../deps/analyze";

const app = express();
app.use("/", express.static("dist"));
app.use(bodyParser.json());

app.post("/deps", (req, res) => {
  let request = req.body as contract.DepsRequest;
  let registry = analyze(request.path);
  respondJson<contract.DepsResponse>(res, {
    registry
  });
});

app.listen(3001, () => {
  console.log("Ready to serve.");
});

function respondJson<T>(res: express.Response, data: T) {
  // Note: we could use res.json(store) if we didn't want it formatted nicely.
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data, null, 2));
}
