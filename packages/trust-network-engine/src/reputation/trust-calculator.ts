export class CapabilityTrustCalculator {
  /**
   * Calculates the Capability Trust Index (CTI).
   * 
   * CTI = (Evidence Quality * Verified Contribution * Collaboration History * Learning Adaptation) / Risk Exposure
   */
  public calculateCTI(
    evidenceQuality: number,
    verifiedContribution: number,
    collaborationHistory: number,
    learningAdaptation: number,
    riskExposure: number
  ): number {
    if (riskExposure <= 0) riskExposure = 1;
    
    const trust = (evidenceQuality * verifiedContribution * collaborationHistory * learningAdaptation) / riskExposure;
    
    // Normalize to 1-100 scale for UI
    const normalized = Math.min(Math.round(trust / 100), 100);
    return normalized;
  }
}
