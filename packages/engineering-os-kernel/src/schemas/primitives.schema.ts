export interface Asset {
  id: string;
  domain: string;
  state: State;
  capabilities: string[];
  evidenceGraph: string[]; // Links to Evidence IDs
  metadata: Record<string, any>;
}

export interface Event {
  id: string;
  timestamp: string;
  source: string;
  type: string;
  payload: any;
}

export interface Evidence {
  id: string;
  eventId: string;
  timestamp: string;
  hash: string;
  signature: string;
  verified: boolean;
}

export interface State {
  status: 'operating' | 'maintenance' | 'fault' | 'offline' | 'unknown';
  metrics: Record<string, any>;
  lastUpdated: string;
}

export interface StewardshipContext {
  assetId: string;
  domain: string;
  state: State;
  evidence: Evidence[];
  policies: Policy[];
  timestamp: string;
}

export interface ReasoningCapability {
  id: string;
  name: string;
  supports: (domain: string) => boolean;
  propose: (context: StewardshipContext) => InterventionProposal[];
}

export interface ReflectionCapability {
  id: string;
  name: string;
  supports: (domain: string) => boolean;
  reflect: (intervention: Intervention, outcome: Outcome, context: StewardshipContext) => Reflection[];
}

export interface TeacherCapability {
  id: string;
  name: string;
  supports: (domain: string) => boolean;
  synthesize: (reflections: Reflection[], context: StewardshipContext) => { patterns: Pattern[], lessons: Lesson[] };
}

export interface ResearcherCapability {
  id: string;
  name: string;
  supports: (domain: string) => boolean;
  auditKnowledge: (claims: Claim[], evidence: Evidence[]) => { contradictions: Contradiction[], proposals: ResearchProposal[] };
}

export interface SynthesizerCapability {
  id: string;
  name: string;
  supports: (domain: string) => boolean;
  synthesize: (domains: string[], theories: Theory[], lessons: Lesson[]) => { strategies: string[] };
}

export interface ModelerCapability {
  id: string;
  name: string;
  supports: (domain: string) => boolean;
  model: (theory: Theory, context: StewardshipContext) => { modelId: string, predictions: Prediction[] };
}

export interface InterventionProposal {
  id: string;
  capabilityId: string;
  assetId: string;
  proposedAction: string;
  confidence: number;
  reasoning: string;
  evidenceRefs: string[];
  createdAt: string;
  hash: string;
}

export interface Policy {
  id: string;
  name: string;
  domain: string;
  evaluate: (proposal: InterventionProposal, context: StewardshipContext) => GovernanceDecision;
}

export interface GovernanceDecision {
  proposalId: string;
  status: 'APPROVED' | 'REJECTED' | 'FLAGGED';
  policyId: string;
  explanation: string;
  evidenceRefs: string[];
}

export interface Intervention {
  id: string;
  decisionId: string;
  timestamp: string;
  action: string;
  status: 'pending' | 'executed' | 'rejected';
}

export interface Outcome {
  id: string;
  interventionId: string;
  timestamp: string;
  semanticResult: string;
  evidenceRefs: string[];
}

export interface Reflection {
  id: string;
  outcomeId: string;
  timestamp: string;
  evaluation: {
    intent: string;      // Did we accomplish what we intended?
    efficiency: string;  // Did we accomplish it with minimal cost?
    safety: string;      // Did we introduce unintended risk?
    stewardship: string; // Would we make the same decision again?
  };
  recommendedPolicyUpdates: string[]; // Advisory only
}

export interface Pattern {
  id: string;
  description: string;
  occurrences: number;
  confidence: number;
  evidenceIds: string[];
  domains: string[];
}

export interface Lesson {
  id: string;
  principle: string;
  hypothesis: string;
  confidence: number;
  evidenceIds: string[];
  reflectionIds: string[];
  applicableDomains: string[];
  assumptions: string[];
  limitations: string[];
  supersedes?: string;
  version: number;
}

export interface Theory {
  id: string;
  principle: string;
  confidence: number;
  lessonIds: string[];
  applicableDomains: string[];
  establishedAt: string;
}

export interface Observation {
  id: string;
  sourceId: string;
  timestamp: string;
  metric: string;
  value: string;
  unit: string;
}

export interface Claim {
  id: string;
  statement: string;
  authors: string[];
  institution: string;
  sourceType: string;
  evidenceRefs: string[];
  confidence: number;
  domain: string;
}

export interface Contradiction {
  id: string;
  claimAId: string;
  claimBId: string;
  reason: string;
  supportingEvidenceA: string[];
  supportingEvidenceB: string[];
  confidence: number;
}

export interface ResearchProposal {
  id: string;
  targetContradictionId?: string;
  targetLessonId?: string;
  proposedExperiment: string;
  expectedOutcomes: string[];
  justification: string;
}

export interface ScientificConfidenceProfile {
  evidence: number; // 1-5
  reproducibility: number; // 1-5
  novelty: number; // 1-5
  industryAdoption: number; // 1-5
  theoreticalBasis: number; // 1-5
  experimentalBasis: number; // 1-5
  realWorldValidation: number; // 1-5
  governanceApproval: number; // 1-5
}

export interface Assumption {
  id: string;
  description: string;
  metric?: string;
  operator?: string; // e.g. '<', '>', '=='
  value?: string;
}

export interface Model {
  id: string;
  theoryId: string;
  version: string;
  executableHash: string;
  assumptions: Assumption[];
  applicableDomains: string[];
}

export interface Prediction {
  id: string;
  modelId: string;
  contextId: string;
  predictedOutcome: string;
  confidenceProfile: ScientificConfidenceProfile;
  violatedAssumptions: Assumption[];
}
