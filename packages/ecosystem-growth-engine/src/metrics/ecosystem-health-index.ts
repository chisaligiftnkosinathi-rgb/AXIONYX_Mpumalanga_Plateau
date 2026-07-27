export interface ForestMetrics {
  survivalRate: number;
  capabilityDensity: number;
  connectivityVelocity: number;
  regenerationScore: number;
}

export class EcosystemHealthIndex {
  public calculateHealth(metrics: ForestMetrics): number {
    const total = 
      metrics.survivalRate + 
      metrics.capabilityDensity + 
      metrics.connectivityVelocity + 
      metrics.regenerationScore;
      
    // Returns percentage health 0-100
    return Math.min(Math.round((total / 400) * 100), 100);
  }
}
