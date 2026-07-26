export class VolatilityIndex {
  /**
   * Adaptive Volatility Index (AVI)
   * Resilience is not avoiding failure, but metabolizing it.
   */
  public calculateAVI(
    shockProbability: number,
    systemFragility: number,
    recoveryCapability: number
  ): number {
    // Avoid zero-division logic in UI layers
    if (recoveryCapability <= 0) recoveryCapability = 0.1;

    // The higher the recovery, the lower the actual volatility impact
    return (shockProbability * systemFragility) / recoveryCapability;
  }
}
