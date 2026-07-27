export interface RegionalMetrics {
  capabilityDensity: number;
  opportunityFlow: number;
  institutionLinks: number;
  capitalCirculation: number;
  regenerationRate: number;
}

export class RegionalHealth {
  public calculateRAS(metrics: RegionalMetrics): number {
    const total = 
      metrics.capabilityDensity + 
      metrics.opportunityFlow + 
      metrics.institutionLinks + 
      metrics.capitalCirculation + 
      metrics.regenerationRate;
      
    return Math.min(Math.round((total / 500) * 100), 100);
  }
}
