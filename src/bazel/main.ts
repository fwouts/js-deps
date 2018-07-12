import { analyzeDirectory } from "../deps/analyze";
import { buildRules } from "./build-rules";
import { createBuildFiles } from "./create-build-files";
import { createWorkspace } from "./create-workspace";

let sourceDirectory = process.argv[2];
let registry = analyzeDirectory(sourceDirectory);
const rules = buildRules(registry);
process.chdir(sourceDirectory);
createWorkspace();
createBuildFiles(rules);
