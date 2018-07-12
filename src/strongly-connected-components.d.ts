declare module "strongly-connected-components" {
  declare function scc(adjacencyList: {
    [node: NodeIndex]: NodeIndex[];
  }): {
    /**
     * A list of components, each containing the list of nodes it contains.
     */
    components: NodeIndex[][];

    /**
     * An adjacenly list for the components.
     */
    adjacencyList: { [node: ComponentId]: ComponentId[] };
  };

  export type NodeIndex = number;
  export type ComponentId = number;

  export = scc;
}
