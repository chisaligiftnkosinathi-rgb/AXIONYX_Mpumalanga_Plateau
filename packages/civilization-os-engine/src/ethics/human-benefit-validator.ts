export class HumanBenefitValidator {
  /**
   * At planetary scale, the question is not only "Can the system coordinate?" 
   * It is: "Should the system coordinate this?"
   */
  public validateEthics(
    improvesResilience: boolean,
    increasesLocalAutonomy: boolean,
    distributesKnowledge: boolean
  ): boolean {
    // If a capability assembly extracts without adding to resilience or autonomy, it fails ethics.
    return improvesResilience && (increasesLocalAutonomy || distributesKnowledge);
  }
}
