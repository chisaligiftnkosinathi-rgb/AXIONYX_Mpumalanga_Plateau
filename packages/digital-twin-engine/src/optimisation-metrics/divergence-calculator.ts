export class DivergenceCalculator {
  /**
   * Calculates the Capability Coordination Delay (CCD)
   * Formula: Capability Loss = Problem Duration × Coordination Delay × Complexity
   * @param problemDurationMonths How long the problem persists without a solution
   * @param coordinationDelayMonths How long it takes to find the right capability/expertise
   * @param complexityMultiplier A measure of how complex the problem is (1.0 - 5.0)
   * @returns Total Capability Loss in units
   */
  public calculateCapabilityLoss(
    problemDurationMonths: number, 
    coordinationDelayMonths: number, 
    complexityMultiplier: number
  ): number {
    return problemDurationMonths * coordinationDelayMonths * complexityMultiplier;
  }

  /**
   * Simulates the reality evidence scores based on whether the ecosystem is optimized or reactive.
   */
  public generateEvidenceScores(isOptimized: boolean) {
    if (isOptimized) {
      return {
        capabilityActivationRate: 85, // %
        knowledgeRetention: 95, // %
        coordinationDelay: 1.5, // months
        nodeCreationRate: 3.2, // nodes per year
        industrialResilience: 88, // %
        sovereigntyGrowth: 92 // %
      };
    } else {
      return {
        capabilityActivationRate: 35, // %
        knowledgeRetention: 40, // %
        coordinationDelay: 18, // months
        nodeCreationRate: 0.8, // nodes per year
        industrialResilience: 45, // %
        sovereigntyGrowth: 30 // %
      };
    }
  }
}
