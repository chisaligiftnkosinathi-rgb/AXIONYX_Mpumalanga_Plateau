export interface NodeMetrics {
  capabilityStrength: number; // C
  verificationEvidence: number; // V
  demandAlignment: number; // D
  trustMaturity: number; // T
  scalability: number; // S
}

export interface ClusteredEnterprise {
  enterpriseId: string;
  name: string;
  assembledNodes: string[];
  emergenceIndex: number;
}

export class EnterpriseAssembler {
  
  /**
   * Calculates the Enterprise Emergence (E) index based on the formula:
   * E = C × V × D × T × S
   * Because it is multiplicative, one weak factor collapses the entire potential.
   */
  public calculateEmergence(metrics: NodeMetrics): number {
    return (
      metrics.capabilityStrength *
      metrics.verificationEvidence *
      metrics.demandAlignment *
      metrics.trustMaturity *
      metrics.scalability
    );
  }

  /**
   * Evaluates if a combination of nodes crosses the threshold required to form a new enterprise.
   */
  public attemptAssembly(nodes: { nodeId: string; metrics: NodeMetrics; domain: string }[]): ClusteredEnterprise | null {
    if (nodes.length === 0) return null;

    // Calculate the collective emergence index (average of individual emergence scores for simplicity in this model)
    const totalEmergence = nodes.reduce((sum, node) => sum + this.calculateEmergence(node.metrics), 0);
    const averageEmergence = totalEmergence / nodes.length;

    // A cluster needs an average emergence score of > 0.3 to be viable for formal enterprise formation.
    if (averageEmergence > 0.3) {
      return {
        enterpriseId: `ENT-ASSEMBLY-${Date.now()}`,
        name: `Indigenous Assembly: ${nodes.map(n => n.domain).join(' + ')}`,
        assembledNodes: nodes.map(n => n.nodeId),
        emergenceIndex: averageEmergence
      };
    }

    return null;
  }
}
