export interface NodeScan {
  nodeId: string;
  peopleCount: number;
  evidenceCount: number;
  revenueFlow: number;
  connections: string[];
}

export class EcosystemScanner {
  public scanForest(nodes: NodeScan[]) {
    return {
      totalNodes: nodes.length,
      totalPeople: nodes.reduce((acc, curr) => acc + curr.peopleCount, 0),
      totalConnectivity: nodes.reduce((acc, curr) => acc + curr.connections.length, 0),
      totalValueFlow: nodes.reduce((acc, curr) => acc + curr.revenueFlow, 0)
    };
  }
}
