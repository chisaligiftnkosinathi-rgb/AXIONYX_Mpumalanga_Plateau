export interface MarketingReality {
  organizationId: string;
  
  capability: {
    name: string;
    description: string;
  };
  
  evidence: {
    certifications: string[];
    experience: string[];
    verifiedFacts: string[];
  };
  
  audience: {
    customerType: string;
    problem: string;
  };
  
  desiredOutcome: {
    leadType: string;
    action: string;
  };
}
