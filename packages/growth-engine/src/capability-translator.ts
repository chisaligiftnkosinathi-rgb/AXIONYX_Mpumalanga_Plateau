import { MarketingReality } from './schemas/marketing.schema';

export class CapabilityTranslator {
  
  /**
   * Translates a strict business capability and its evidence into a customer-centric format,
   * without injecting hyperbole or unverified claims.
   */
  static translateToValueProposition(reality: MarketingReality): string {
    const verifiedMethods = reality.evidence.verifiedFacts.join(', ');
    const certifications = reality.evidence.certifications.join(', ');
    
    return `Our organization provides ${reality.capability.name} focused on resolving issues related to ${reality.audience.problem}. Our capability is validated through ${verifiedMethods} and certified via ${certifications}.`;
  }
}
