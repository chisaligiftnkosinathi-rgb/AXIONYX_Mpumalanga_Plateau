// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/competency-engine/src/schemas/capability.ts

export type CapabilityLevel = 
  | 'Explorer' 
  | 'Practitioner' 
  | 'Analyst' 
  | 'Professional' 
  | 'Expert' 
  | 'Researcher' 
  | 'Steward';

export interface StandardReference {
  standardId: string;   // e.g., "ISO 17025"
  clause: string;       // e.g., "7.2.1"
  description: string;
}

export interface VerificationRecord {
  verifiedBy: string;   // Actor ID of the Steward or AI Model
  date: Date;
  method: 'Peer Review' | 'Automated' | 'Laboratory Audit' | 'Investigation';
  confidenceScore: number; // 0.0 to 1.0
}

export interface EvidenceReference {
  evidenceId: string;   // e.g., a GitHub PR URL, or an Investigation ID
  type: string;         // e.g., "Pull Request", "Laboratory Report", "Measurement"
  description: string;
}

export interface CapabilityProfile {
  actorId: string;
  capabilityId: string; // e.g., "Operate Analytical Balance" or "Scientific Reasoning"
  
  proficiency: CapabilityLevel;
  confidence: number;   // 0.0 to 1.0 representing mathematical trust
  
  evidence: EvidenceReference[];
  verifiedBy: VerificationRecord[];
  standards: StandardReference[];
  
  lastVerified: Date;
  expires?: Date;       // Trust decay implementation
}

export interface ActorPassport {
  actorId: string;
  name: string;
  capabilities: CapabilityProfile[];
}
