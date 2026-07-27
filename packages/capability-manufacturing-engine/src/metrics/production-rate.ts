export class ProductionRateCalculator {
  /**
   * CPR = (New Capability Nodes * Capability Maturity) / (Time * Coordination Delay)
   */
  public calculateCPR(newNodes: number, averageMaturity: number, timeMonths: number, coordinationDelay: number): number {
    if (timeMonths <= 0 || coordinationDelay <= 0) return 0;
    
    return (newNodes * averageMaturity) / (timeMonths * coordinationDelay);
  }
}
