// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/learning-engine/src/schemas/lcs.ts

export type ResearchLevel = 
  | 'Explorer' 
  | 'Investigator' 
  | 'Analyst' 
  | 'Scientist' 
  | 'Engineer' 
  | 'Researcher' 
  | 'Steward';

export type CuriosityArchetype = 
  | 'Why?' 
  | 'How?' 
  | 'What if?' 
  | 'What caused this?' 
  | 'What will happen if...?' 
  | 'Can we improve it?' 
  | 'Can we predict it?' 
  | 'Can we automate it?';

export interface DiscoveryLayer {
  curiosityArchetype: CuriosityArchetype;
  question: string;
  observation: string;
  mystery: string;
  realWorldContext: string;
  whyItMatters: string;
}

export interface InvestigationLayer {
  hypotheses: string[];
  observations: string[];
  evidence: string[];
  measurements: string[];
  standards: string[];
  constraints: string[];
  experiments: string[];
}

export interface UnderstandingLayer {
  concepts: string[];
  relationships: string[];
  systems: string[];
  capabilities: string[];
  naturalLaws: string[];
}

export interface ApplicationLayer {
  diagnosis: string[];
  recommendations: string[];
  workflow: string[];
  verification: string[];
  reflection: string[];
}

export interface ContributionLayer {
  researchQuestion: string;
  missingKnowledge: string;
  githubIssue: string;
  knowledgeProposal: string;
  peerReview: string;
}

export interface InvestigationLCS {
  id: string;
  title: string;
  domain: string;
  targetLevel: ResearchLevel;
  
  // The 5 Layers of the Learning Content Specification
  discovery: DiscoveryLayer;
  investigation: InvestigationLayer;
  understanding: UnderstandingLayer;
  application: ApplicationLayer;
  contribution: ContributionLayer;
}
