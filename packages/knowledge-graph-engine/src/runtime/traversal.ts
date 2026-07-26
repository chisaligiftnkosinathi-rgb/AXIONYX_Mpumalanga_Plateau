import { KnowledgeGraph, KnowledgeNode } from '../schemas/engine.schema';

export interface TraversalResult {
  path: KnowledgeNode[];
  isValid: boolean;
}

export class KnowledgeTraversal {
  constructor(private graph: KnowledgeGraph) {}

  trace(nodeId: string): TraversalResult {
    const path: KnowledgeNode[] = [];
    let currentId = nodeId;
    
    while (currentId) {
      const node = this.graph.getNode(currentId);
      if (!node) break;
      path.push(node);
      
      // Follow provenance edges: derived_from, generated_by, authorized_by, published_in
      const edges = this.graph.getEdgesFrom(currentId).filter(e => 
        ['derived_from', 'generated_by', 'authorized_by', 'published_in'].includes(e.type)
      );
      
      if (edges.length === 0) break;
      currentId = edges[0].targetId;
    }
    
    return { path, isValid: path.length > 0 };
  }

  explain(evidenceId: string, goalId: string): TraversalResult {
    // A simplified graph traversal to find a path from evidence to goal
    const path: KnowledgeNode[] = [];
    let currentId = evidenceId;
    
    while (currentId) {
      const node = this.graph.getNode(currentId);
      if (!node) break;
      path.push(node);
      
      if (currentId === goalId) {
        return { path, isValid: true };
      }
      
      const edges = this.graph.getEdgesFrom(currentId);
      if (edges.length === 0) break;
      currentId = edges[0].targetId; // simplified linear traversal
    }
    
    return { path, isValid: false };
  }

  impact(nodeId: string): KnowledgeNode[] {
    // Find all nodes that depend on this node (downstream impact)
    const impacted: KnowledgeNode[] = [];
    const edgesTo = this.graph.getEdgesTo(nodeId);
    
    for (const edge of edgesTo) {
      const sourceNode = this.graph.getNode(edge.sourceId);
      if (sourceNode) {
        impacted.push(sourceNode);
      }
    }
    return impacted;
  }
}
