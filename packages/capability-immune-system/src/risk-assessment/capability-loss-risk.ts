export interface CLRMetrics {
  financialStress: number; // 0-100
  operationalDependency: number; // 0-100
  knowledgeConcentration: number; // 0-100
  replacementDifficulty: number; // 0-100
  socialImpact: number; // 0-100
}

export class CapabilityLossRiskCalculator {
  /**
   * Calculates the Capability Loss Risk (CLR).
   * A vehicle is not just a financial number; it is a critical organ.
   */
  public calculateCLR(metrics: CLRMetrics): number {
    const weights = {
      financialStress: 0.15,
      operationalDependency: 0.30,
      knowledgeConcentration: 0.20,
      replacementDifficulty: 0.20,
      socialImpact: 0.15
    };

    const riskScore = 
      (metrics.financialStress * weights.financialStress) +
      (metrics.operationalDependency * weights.operationalDependency) +
      (metrics.knowledgeConcentration * weights.knowledgeConcentration) +
      (metrics.replacementDifficulty * weights.replacementDifficulty) +
      (metrics.socialImpact * weights.socialImpact);

    return Math.round(riskScore * 10) / 10;
  }
}
