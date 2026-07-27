export interface PartnershipInput {
  capabilityAlignment: number;
  evidenceReadiness: number;
  strategicValue: number;
  regenerationPotential: number;
}

export class PartnershipMatcher {
  /**
   * Calculates the Institutional Activation Score (IAS)
   */
  public calculateIAS(input: PartnershipInput): number {
    const score = 
      (input.capabilityAlignment * 0.4) +
      (input.evidenceReadiness * 0.3) +
      (input.strategicValue * 0.2) +
      (input.regenerationPotential * 0.1);
      
    return Math.min(Math.round(score * 100), 100);
  }

  public evaluateMatch(ias: number): string {
    if (ias > 85) return 'High Match - Ready for Institutional Bridge';
    if (ias > 60) return 'Moderate Match - Evidence Augmentation Required';
    return 'Low Match - Capability Misaligned';
  }
}
