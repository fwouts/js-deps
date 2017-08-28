import { Registry } from "../deps/analyze";

/**
 * Returns the source path of this project itself.
 *
 * This is used to show a meaningful graph on first load.
 */
export interface GetSourcePathResponse {
  path: string;
}

/**
 * Returns the deps of a given directory.
 */
export interface DepsRequest {
  path: string;
}

export interface DepsResponse {
  registry: Registry;
}
