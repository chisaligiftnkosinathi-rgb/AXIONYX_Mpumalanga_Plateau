export interface DeviationEvent {
  eventId: string;
  expectedPerformance: number; // e.g. 100,000 km
  observedPerformance: number; // e.g. 60,000 km
  timeTakenToResolveDays: number;
  improvementsGenerated: number;
}

export interface NodeControlMetrics {
  nodeId: string;
  name: string;
  baseCapability: number;
  deviations: DeviationEvent[];
}

export class AdaptiveControlEngine {
  
  /**
   * Calculates the Deviation Vector (D).
   * D = |ExpectedReality - ObservedReality|
   */
  public calculateDeviationVector(expected: number, observed: number): number {
    if (expected === 0) return 0;
    return Math.abs(expected - observed) / expected; // Normalized to a percentage
  }

  /**
   * Calculates Learning Velocity (LV).
   * LV = Improvements Generated / Time Taken
   */
  public calculateLearningVelocity(improvements: number, timeTakenDays: number): number {
    if (timeTakenDays === 0) return improvements;
    return improvements / timeTakenDays;
  }

  /**
   * Evaluates the new capability of a node based on its reaction to uncertainty.
   * Capability_new = Capability_old + Learning - UncorrectedDeviation
   */
  public evaluateCapabilityGrowth(node: NodeControlMetrics): { newCapability: number; learningVelocity: number; status: string } {
    let totalLearning = 0;
    let uncorrectedDeviation = 0;
    let totalVelocity = 0;

    node.deviations.forEach(dev => {
      const d = this.calculateDeviationVector(dev.expectedPerformance, dev.observedPerformance);
      const lv = this.calculateLearningVelocity(dev.improvementsGenerated, dev.timeTakenToResolveDays);
      
      totalVelocity += lv;

      if (lv > 0) {
        // High learning converts deviation into capability growth
        totalLearning += (d * lv); 
      } else {
        // Zero learning punishes the capability
        uncorrectedDeviation += d;
      }
    });

    const averageLV = node.deviations.length > 0 ? totalVelocity / node.deviations.length : 0;
    const newCapability = Math.max(0, Math.min(1.0, node.baseCapability + totalLearning - uncorrectedDeviation));

    let status = 'EQUILIBRIUM';
    if (averageLV > 0.5) status = 'EVOLVING';
    if (uncorrectedDeviation > 0.2 && averageLV === 0) status = 'STAGNANT';

    return {
      newCapability,
      learningVelocity: averageLV,
      status
    };
  }
}
