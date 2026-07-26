import { MarketingReality } from '../../../../translation-engine/src/schemas/marketing.schema';

export interface CampaignDefinition {
  campaignId: string;
  targetReality: MarketingReality;
  assets: CampaignAsset[];
}

export interface CampaignAsset {
  assetType: 'COMPANY_PROFILE' | 'ADVERTISEMENT' | 'EDUCATION_VIDEO' | 'LEAD_CAPTURE';
  promptConstraints: string[];
  requiredEvidenceIds: string[];
}
