export interface ActivationState {
  unactivatedPotential: number;
  learningNodes: number;
  activeContributors: number;
  mentors: number;
}

export class CapabilityActivationCycle {
  /**
   * Models the loop: New Person -> Exposure -> Learning -> Practice -> Contribution -> Mentorship -> New Carrier
   */
  public simulateActivation(newEntrants: number): ActivationState {
    // Highly simplified activation logic
    return {
      unactivatedPotential: newEntrants * 0.1, // 10% dropout or inactive
      learningNodes: newEntrants * 0.3,
      activeContributors: newEntrants * 0.5,
      mentors: newEntrants * 0.1
    };
  }

  public calculateActivationRate(state: ActivationState): number {
    const total = state.unactivatedPotential + state.learningNodes + state.activeContributors + state.mentors;
    return ((state.activeContributors + state.mentors) / total) * 100;
  }
}
