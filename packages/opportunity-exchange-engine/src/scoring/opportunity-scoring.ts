export interface OAPMetrics {
  capabilityStrength: number;
  marketDemand: number;
  evidence: number;
  capitalAvailability: number;
  networkSupport: number;
}

export class OpportunityScoring {
  /**
   * Calculates the Opportunity Activation Probability (OAP)
   */
  public calculateOAP(metrics: OAPMetrics): number {
    const total = 
      metrics.capabilityStrength + 
      metrics.marketDemand + 
      metrics.evidence + 
      metrics.capitalAvailability + 
      metrics.networkSupport;
      
    return Math.min(Math.round((total / 500) * 100), 100);
  }
}
