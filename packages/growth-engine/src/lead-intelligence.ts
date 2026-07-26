import { LeadInteraction, QualifiedOpportunity, ExplainableLeadScore } from './schemas/lead.schema';

export class LeadIntelligence {
  
  /**
   * Calculates a transparent, explainable lead score based on deterministic interactions.
   */
  static scoreOpportunity(interactions: LeadInteraction[]): ExplainableLeadScore {
    let score = 0;
    const factors = [];
    
    const viewed = interactions.find(i => i.interactionType === 'VIEWED_CONTENT');
    if (viewed) {
      score += 20;
      factors.push({ description: 'Customer viewed capability content', matched: true, weight: 20 });
    }
    
    const understood = interactions.find(i => i.interactionType === 'UNDERSTOOD_CAPABILITY');
    if (understood) {
      score += 30;
      factors.push({ description: 'Customer engaged with evidence layer', matched: true, weight: 30 });
    }
    
    const requested = interactions.find(i => i.interactionType === 'REQUESTED_INFO');
    if (requested) {
      score += 50;
      factors.push({ description: 'Customer explicitly requested matching consultation', matched: true, weight: 50 });
    }
    
    return {
      score,
      reason: `Lead achieved ${score}% confidence through explicit, documented engagement with verified capabilities.`,
      factors
    };
  }
}
