export interface SeedNode {
  id: string;
  name: string;
  invisiblePotential: number; // 0.0 to 1.0 (Education, Resources, Market Opportunity)
  execution: number; // 0.0 to 1.0 (Action taken, experiments run)
  evidence: number; // 0.0 to 1.0 (Traceable results, data recorded)
}

export class ImpandeBankEngine {
  
  /**
   * Calculates the Impande Germination Score
   * Visible Capability = Invisible Potential × Execution × Evidence
   */
  public calculateGermination(seed: SeedNode): number {
    return seed.invisiblePotential * seed.execution * seed.evidence;
  }

  /**
   * Evaluates if a node is ready to receive Capital (Sunlight).
   * A bank evaluates this instead of a traditional credit score.
   */
  public evaluateCapitalReadiness(seed: SeedNode) {
    const impandeScore = this.calculateGermination(seed);

    if (seed.invisiblePotential > 0.8 && seed.execution === 0) {
      return {
        impandeScore,
        traditionalCreditScore: 0,
        classification: 'DORMANT_SEED',
        bankDecision: 'REJECT_CAPITAL',
        rationale: 'High potential, but zero execution. Capital cannot force a seed to germinate. The system must act first.'
      };
    }

    if (seed.execution > 0.8 && seed.evidence === 0) {
      return {
        impandeScore,
        traditionalCreditScore: 400, // They are trying, maybe have some cashflow
        classification: 'INVISIBLE_GROWTH',
        bankDecision: 'PROVIDE_MEASUREMENT',
        rationale: 'Action is occurring, but there is no traceability. Provide measurement infrastructure (sensors) before capital.'
      };
    }

    if (impandeScore > 0.5) {
      return {
        impandeScore,
        traditionalCreditScore: 'N/A (Irrelevant)',
        classification: 'GERMINATED_NODE',
        bankDecision: 'DEPLOY_CAPITAL',
        rationale: 'Potential is verified through action and evidence. Deploy capital (sunlight) to scale the photosynthetic growth reaction.'
      };
    }

    return {
      impandeScore,
      traditionalCreditScore: 0,
      classification: 'UNKNOWN_CAPABILITY',
      bankDecision: 'AWAITING_SIGNAL',
      rationale: 'The root system must push through the soil to be seen.'
    };
  }
}
