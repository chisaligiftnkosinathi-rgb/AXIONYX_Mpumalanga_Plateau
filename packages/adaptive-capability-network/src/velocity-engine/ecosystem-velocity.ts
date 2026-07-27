export interface VelocityMetrics {
  capabilityDensity: number;
  evidenceQuality: number;
  networkConnectivity: number;
  adaptationCapacity: number;
  coordinationDelay: number;
}

export class EcosystemVelocity {
  /**
   * EVS = (Density * Evidence * Connection * Adaptation) / Delay
   */
  public calculateEVS(metrics: VelocityMetrics): number {
    if (metrics.coordinationDelay <= 0) return 0;

    const numerator = 
      metrics.capabilityDensity * 
      metrics.evidenceQuality * 
      metrics.networkConnectivity * 
      metrics.adaptationCapacity;

    // Normalize for readability (e.g. scale down by 10,000)
    return Math.round((numerator / metrics.coordinationDelay) / 10000);
  }
}
