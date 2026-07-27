export class NCSICalculator {
  /**
   * Calculates the Nation Capability Sustainability Index.
   */
  public calculateNCSI(
    capability: number,
    evidence: number,
    trust: number,
    collaboration: number,
    learning: number,
    resilience: number,
    resourcePressure: number
  ): number {
    if (resourcePressure <= 0) resourcePressure = 0.1;
    return (capability * evidence * trust * collaboration * learning * resilience) / resourcePressure;
  }
}
