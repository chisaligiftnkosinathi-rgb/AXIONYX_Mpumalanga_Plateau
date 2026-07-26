export interface CapabilityCostMetrics {
  adSpend: number;
  signalsReceived: number;
  acriTranslations: number;
  capabilityNodesCreated: number;
  collaborationsFormed: number;
  opportunitiesGenerated: number;
}

export class CapabilityCostCalculator {
  /**
   * Calculates the Cost Per Capability Discovered (CPCD).
   * Equation: Ad Spend / Capability Nodes Created
   */
  public calculateCPCD(metrics: CapabilityCostMetrics): number {
    if (metrics.capabilityNodesCreated === 0) return metrics.adSpend; // Infinite cost if zero nodes
    return metrics.adSpend / metrics.capabilityNodesCreated;
  }

  /**
   * Evaluates the Signal Density (Quality of Attention).
   * Equation: Signals Received / Ad Spend
   */
  public calculateSignalDensity(metrics: CapabilityCostMetrics): number {
    return metrics.signalsReceived / metrics.adSpend;
  }
}
