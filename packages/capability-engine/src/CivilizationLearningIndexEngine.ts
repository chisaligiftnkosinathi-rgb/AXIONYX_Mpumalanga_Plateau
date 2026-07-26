export interface CivilizationalNode {
  id: string;
  name: string;
  resources: number; // 0.0 to 1.0 (Capital, Materials, Human Power)
  capability: number; // 0.0 to 1.0 (Technical, Organizational skills)
  learningVelocity: number; // 0.0 to 1.0 (Speed of deviation correction)
  trustEvidence: number; // 0.0 to 1.0 (Quality of traceability and evidence)
}

export class CivilizationLearningIndexEngine {
  
  /**
   * Calculates the Civilization Learning Index (Wealth) for a given node/region.
   * W = R × C × Lv × T
   */
  public calculateIndex(node: CivilizationalNode): number {
    return node.resources * node.capability * node.learningVelocity * node.trustEvidence;
  }

  /**
   * Evaluates the node and prescribes a civilizational intervention.
   */
  public evaluateCivilization(node: CivilizationalNode) {
    const cli = this.calculateIndex(node);
    
    if (node.resources > 0.8 && node.learningVelocity < 0.3) {
      return {
        cli,
        classification: 'EXTRACTION_ECONOMY',
        diagnosis: 'High resources but broken learning loop. The system loses energy over time.',
        intervention: 'Deploy NC sensors to capture deviations and force learning.'
      };
    }

    if (node.learningVelocity > 0.8 && node.trustEvidence > 0.8) {
      return {
        cli,
        classification: 'LEARNING_CIVILIZATION',
        diagnosis: 'High velocity and trust. Every failure increases intelligence.',
        intervention: 'Deploy Macro-Capital to scale innovation.'
      };
    }

    return {
      cli,
      classification: 'EMERGING_SYSTEM',
      diagnosis: 'Developing capability. Constraints in either resources or measurement.',
      intervention: 'Connect isolated nodes to improve traceability and scale.'
    };
  }
}
