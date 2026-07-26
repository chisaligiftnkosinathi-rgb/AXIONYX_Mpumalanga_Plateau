export class CapabilityCreditCalculator {
  /**
   * Calculates the Capability Growth Value (CGV).
   * Equation: CGV = (E * T * C * L) - R
   * (Adapted mathematically for scaling in the engine context)
   */
  public calculateCGV(
    evidenceScore: number,
    trustScore: number,
    collaborationImpact: number,
    learningGenerated: number,
    resourceConsumption: number
  ): number {
    if (resourceConsumption <= 0) resourceConsumption = 1; // Prevent zero division if mapped directly as a divisor later
    
    // Core equation: (E * T * C * L) / R
    const rawCGV = (evidenceScore * trustScore * collaborationImpact * learningGenerated) / resourceConsumption;
    
    return Math.round(rawCGV / 100);
  }
}
