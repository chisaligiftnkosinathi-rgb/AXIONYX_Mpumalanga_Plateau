import { Scene } from '../schema';

export interface GeneratedPrompt {
  assetType: "VIDEO" | "IMAGE" | "AUDIO";
  realityReference: {
    realityId: string;
    eventIds: string[];
  };
  prompt: string;
  constraints: string[];
  forbiddenClaims: string[];
}

export interface PromptTemplate {
  compile(scene: Scene, facts: any): GeneratedPrompt;
}
