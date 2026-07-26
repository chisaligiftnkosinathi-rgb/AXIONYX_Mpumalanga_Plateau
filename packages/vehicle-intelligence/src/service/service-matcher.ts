export interface ServiceMatch {
  customer_need: string;
  matched_provider: string;
  reason: string;
}

export class ServiceMatcher {
  /**
   * Connects the Explainable Diagnosis to the Growth Engine (Opportunity Layer).
   */
  static findOpportunity(recommendedAction: string): ServiceMatch {
    if (recommendedAction.includes("cooling system inspection")) {
      return {
        customer_need: "Cooling system inspection",
        matched_provider: "Cartrack Approved Workshop - Johannesburg North",
        reason: "Provider has verified capability for thermal diagnostics and is within location range."
      };
    }
    return {
      customer_need: "None",
      matched_provider: "N/A",
      reason: "No immediate service required."
    };
  }
}
