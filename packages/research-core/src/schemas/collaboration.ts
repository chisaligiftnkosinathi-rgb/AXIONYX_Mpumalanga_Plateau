// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/schemas/collaboration.ts

export interface Collaboration {
  participantId: string;
  role: 'LEAD_RESEARCHER' | 'AI_AGENT_CHEMISTRY' | 'AI_AGENT_PHYSICS' | 'OBSERVER';
  contributions: string[]; // e.g. ["Proposed Hypothesis 1"]
}
