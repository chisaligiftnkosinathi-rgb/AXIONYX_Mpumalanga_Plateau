import { KnowledgeGraph } from '../schemas/engine.schema';

export class KnowledgeVerification {
  constructor(private graph: KnowledgeGraph) {}

  verifyEvidence(evidenceId: string): boolean {
    const evidenceNode = this.graph.getNode(evidenceId);
    if (!evidenceNode || evidenceNode.type !== 'Evidence') {
      return false;
    }
    
    // Check if evidence is connected to a target competency/goal/policy
    const edges = this.graph.getEdgesFrom(evidenceId);
    return edges.some(e => e.type === 'evidenced_by' || e.type === 'required_by');
  }

  verifyProvenance(nodeId: string): boolean {
    const edges = this.graph.getEdgesFrom(nodeId);
    return edges.some(e => ['generated_by', 'authorized_by', 'published_in', 'derived_from'].includes(e.type));
  }

  verifyTemporalState(nodeId: string, targetDate: Date): boolean {
    const node = this.graph.getNode(nodeId);
    if (!node) return false;
    
    const { valid_from, valid_until } = node.temporal;
    if (valid_from && targetDate < valid_from) return false;
    if (valid_until && targetDate > valid_until) return false;
    
    return true;
  }
}
