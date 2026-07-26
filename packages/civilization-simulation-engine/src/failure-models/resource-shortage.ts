export class ResourceShortageModel {
  /**
   * Simulates a failure pathway where capital or materials bottleneck the capability growth.
   */
  public triggerShock(currentResources: number, severity: number): number {
    return currentResources - (currentResources * severity);
  }
}
