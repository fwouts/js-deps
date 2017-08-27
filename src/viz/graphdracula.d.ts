declare module "graphdracula" {
  class Graph {
    addEdge(from: string, to: string, options?: { directed?: boolean }): void;
  }
  namespace Layout {
    class Spring {
      constructor(graph: Graph);
      layout(): void;
    }
  }
  namespace Renderer {
    class Raphael {
      constructor(
        htmlCanvasId: string,
        graph: Graph,
        width: number,
        height: number
      );
      draw(): void;
    }
  }
}
