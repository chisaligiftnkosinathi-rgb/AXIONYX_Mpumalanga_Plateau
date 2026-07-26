export interface HumanCapabilityDNA {
  knowledge: number; // 0 to 1
  skill: number; // 0 to 1
  reliability: number; // 0 to 1
  scalability: number; // 0 to 1
}

export interface HumanCapabilityNode {
  nodeId: string;
  domain: string;
  dna: HumanCapabilityDNA;
  status: 'ISOLATED' | 'TEAM_READY' | 'ENTERPRISE_READY';
}

export class HumanCapabilityObserver {
  
  /**
   * Evaluates a human capability node to determine if it is ready for enterprise formation.
   */
  public evaluateNode(dna: HumanCapabilityDNA): 'ISOLATED' | 'TEAM_READY' | 'ENTERPRISE_READY' {
    const coreCapability = (dna.knowledge + dna.skill) / 2;
    const executionEvidence = dna.reliability;
    const replicationPotential = dna.scalability;

    if (coreCapability > 0.8 && executionEvidence > 0.8 && replicationPotential > 0.7) {
      return 'ENTERPRISE_READY';
    } else if (coreCapability > 0.6 && executionEvidence > 0.6) {
      return 'TEAM_READY';
    } else {
      return 'ISOLATED';
    }
  }

  /**
   * Calculates the overall industrial emergence index based on a cluster of nodes.
   */
  public calculateEmergenceIndex(nodes: HumanCapabilityNode[]): number {
    if (nodes.length === 0) return 0;
    
    const enterpriseReadyCount = nodes.filter(n => n.status === 'ENTERPRISE_READY').length;
    return enterpriseReadyCount / nodes.length;
  }
}
