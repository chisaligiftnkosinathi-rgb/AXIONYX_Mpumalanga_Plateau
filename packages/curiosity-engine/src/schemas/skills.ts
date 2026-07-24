// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/curiosity-engine/src/schemas/skills.ts

export interface HiddenSkill {
  capabilityId: string;    // e.g., "Systems Thinking"
  specificSkill: string;   // e.g., "Component interaction"
  description: string;
}

export interface CapabilityGeneratorOutput {
  investigationId: string;
  generatedSkills: HiddenSkill[];
}
