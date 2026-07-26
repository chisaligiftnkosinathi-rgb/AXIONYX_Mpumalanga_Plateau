import { MarketingReality } from './schemas/marketing.schema';

export class AudienceMatcher {

  /**
   * Evaluates if a customer's requested problem aligns with the organization's verified capability.
   */
  static evaluateMatch(customerProblem: string, reality: MarketingReality): { isMatch: boolean; reason: string } {
    // In a full implementation, this uses vector embeddings or the semantic ontology graph
    // to determine if the customer's intent overlaps with the capability space.
    
    const intentLower = customerProblem.toLowerCase();
    const capabilityLower = reality.capability.name.toLowerCase();
    
    if (intentLower.includes('coal') && capabilityLower.includes('coal')) {
      return {
        isMatch: true,
        reason: `Customer requirement (${customerProblem}) directly maps to verified capability (${reality.capability.name}).`
      };
    }

    return {
      isMatch: false,
      reason: `No documented evidence that capability ${reality.capability.name} addresses ${customerProblem}.`
    };
  }
}
