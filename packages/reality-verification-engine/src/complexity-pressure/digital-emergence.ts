export class ComplexityPressureEngine {
  /**
   * Calculates when a physical system requires digital coordination.
   * CPI = (People * Processes * Decisions * Evidence) / Existing Coordination Capacity
   */
  public calculateComplexityPressureIndex(
    people: number, 
    processes: number, 
    decisions: number, 
    evidenceItems: number, 
    coordinationCapacity: number
  ): number {
    return (people * processes * decisions * evidenceItems) / (coordinationCapacity || 1);
  }

  /**
   * Returns true if the CPI exceeds the threshold where Digital Intelligence (like AXIONYX) MUST emerge.
   */
  public requiresDigitalEmergence(cpi: number, threshold: number = 10000): boolean {
    return cpi > threshold;
  }
}
