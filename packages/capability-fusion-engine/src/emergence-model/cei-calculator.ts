export class CEICalculator {
  /**
   * Calculates the Capability Emergence Index (CEI).
   * CEI = (Capability_A * Capability_B * Compatibility * Trust * Learning) / Resource_Friction
   */
  public calculateCEI(
    capabilityA: number,
    capabilityB: number,
    compatibility: number,
    trust: number,
    learning: number,
    resourceFriction: number
  ): number {
    if (resourceFriction <= 0) resourceFriction = 0.1;
    return (capabilityA * capabilityB * compatibility * trust * learning) / resourceFriction;
  }
}
