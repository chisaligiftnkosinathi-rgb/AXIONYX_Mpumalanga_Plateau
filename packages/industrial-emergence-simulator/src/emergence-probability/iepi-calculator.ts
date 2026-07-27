import { IndustryResilienceProfile } from '../industry-genome/industry-genome';

export class IEPICalculator {
  /**
   * Calculates the Base Industrial Emergence Probability Index.
   */
  public calculateBaseIEPI(
    capabilityAvailability: number,
    fusionPotential: number,
    marketDemand: number,
    institutionalReadiness: number,
    learningVelocity: number,
    capitalBarrier: number,
    infrastructureGap: number,
    dependencyRisk: number,
    executionComplexity: number
  ): number {
    const numerator = capabilityAvailability * fusionPotential * marketDemand * institutionalReadiness * learningVelocity;
    const denominator = (capitalBarrier * infrastructureGap * dependencyRisk * executionComplexity) || 0.1;
    return numerator / denominator;
  }

  /**
   * Applies the Adaptation Multiplier to calculate the Future IEPI.
   */
  public calculateFutureIEPI(baseIEPI: number, resilience: IndustryResilienceProfile): number {
    return baseIEPI * (1 + resilience.adaptationCapacity);
  }
}
