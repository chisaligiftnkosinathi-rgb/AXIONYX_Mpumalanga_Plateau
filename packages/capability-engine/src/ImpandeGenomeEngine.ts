export type GerminationStage = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface GenomeNode {
  id: string;
  entityName: string;
  stage: GerminationStage;
  evidenceScore: number; 
  connections: string[]; // IDs of other connected nodes (Stage 4+)
}

export class ImpandeGenomeEngine {
  
  /**
   * Enforces the Impande Rule: No capital enters a system before evidence of life.
   */
  public evaluateCapitalReadiness(node: GenomeNode) {
    if (node.stage < 2) {
      return {
        approved: false,
        reason: `Node is at Stage ${node.stage}. Capital accelerates existing life; it does not create life. Must reach Stage 2 (Germination) with verified action.`
      };
    }
    
    if (node.stage >= 2 && node.evidenceScore > 0.6) {
      return {
        approved: true,
        reason: `Node has successfully germinated (Stage ${node.stage}) and produced evidence. Capital can now be applied as sunlight.`
      };
    }
    
    return {
      approved: false,
      reason: 'Node has germinated but lacks sufficient traceability evidence.'
    };
  }

  /**
   * Detects Stage 3 capabilities and suggests Stage 4 Branch Formation.
   */
  public discoverBranches(nodes: GenomeNode[]): string[] {
    const stage3Nodes = nodes.filter(n => n.stage === 3);
    if (stage3Nodes.length > 1) {
      return stage3Nodes.map(n => n.id); // In a real system, we'd map complementary skills
    }
    return [];
  }
}
