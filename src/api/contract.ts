import { Registry } from "../deps/analyze";

export interface DepsRequest {
  path: string;
}

export interface DepsResponse {
  registry: Registry;
}
