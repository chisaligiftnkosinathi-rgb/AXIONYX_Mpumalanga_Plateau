export interface IndustryResilienceProfile {
  shockExposure: number;
  adaptationCapacity: number;
  recoverySpeed: number;
  learningRate: number;
  dependencyReduction: number;
}

export interface IndustryGenome {
  identity: string;
  requiredCapabilities: string[];
  originatingNations: string[];
  evidenceBase: string[];
  marketDemand: number;
  institutionalRequirements: string[];
  resourceRequirements: string[];
  dependencyProfile: any;
  resilienceProfile: IndustryResilienceProfile;
  emergenceProbability: number;
}
