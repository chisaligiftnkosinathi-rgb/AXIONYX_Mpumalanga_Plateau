import { KnowledgeGraph, KnowledgeNode, KnowledgeEdge, ChangeSet, GraphContextType } from '../schemas/engine.schema';

export class GraphContext {
  private deltaNodes: Map<string, KnowledgeNode> = new Map();
  private deltaEdges: Map<string, KnowledgeEdge> = new Map();

  constructor(
    public readonly type: GraphContextType,
    public readonly id: string,
    private readonly baseGraph: KnowledgeGraph
  ) {}

  applyChangeSet(changeSet: ChangeSet) {
    for (const change of changeSet.changes) {
      const baseNode = this.baseGraph.getNode(change.targetNodeId);
      if (!baseNode) continue;
      
      // Copy node to delta if not already there
      if (!this.deltaNodes.has(baseNode.id)) {
        this.deltaNodes.set(baseNode.id, JSON.parse(JSON.stringify(baseNode)));
      }
      
      const node = this.deltaNodes.get(baseNode.id)!;
      if (node.metadata) {
        node.metadata[change.property] = change.newValue;
      }
    }
  }

  getNode(id: string): KnowledgeNode | undefined {
    return this.deltaNodes.get(id) || this.baseGraph.getNode(id);
  }

  getEdgesFrom(sourceId: string): KnowledgeEdge[] {
    const baseEdges = this.baseGraph.getEdgesFrom(sourceId);
    // In a real delta system we would merge with delta edges (additions/removals)
    return baseEdges;
  }

  getEdgesTo(targetId: string): KnowledgeEdge[] {
    return this.baseGraph.getEdgesTo(targetId);
  }
}

export class ScenarioEngine {
  constructor(private readonly baseGraph: KnowledgeGraph) {}

  createScenario(scenarioId: string, changeSets: ChangeSet[]): GraphContext {
    const context = new GraphContext('SCENARIO', scenarioId, this.baseGraph);
    for (const cs of changeSets) {
      context.applyChangeSet(cs);
    }
    return context;
  }
}
