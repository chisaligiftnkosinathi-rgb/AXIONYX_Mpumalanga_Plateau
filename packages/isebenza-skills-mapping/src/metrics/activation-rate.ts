export class ActivationRateCalculator {
  /**
   * CAR = Activated Human Potential / Total Available Capability
   */
  public calculateCAR(activatedPeople: number, totalCapablePeople: number): number {
    if (totalCapablePeople <= 0) return 0;
    return (activatedPeople / totalCapablePeople) * 100; // Percentage
  }
}
