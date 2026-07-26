import { CampaignDefinition, CampaignAsset } from './schemas/campaign.schema';
import { CapabilityTranslator } from './capability-translator';

export class ContentGenerator {
  
  /**
   * Generates constraints for the generative AI model based on the campaign asset type.
   */
  static generateAssetConstraints(campaign: CampaignDefinition, asset: CampaignAsset): string[] {
    const constraints = [...asset.promptConstraints];
    
    const coreProposition = CapabilityTranslator.translateToValueProposition(campaign.targetReality);
    constraints.push(`Must align with core proposition: "${coreProposition}"`);
    constraints.push(`Must explicitly reference evidence: ${asset.requiredEvidenceIds.join(', ')}`);
    constraints.push(`Do not invent unverified certifications or capabilities.`);
    
    return constraints;
  }
}
