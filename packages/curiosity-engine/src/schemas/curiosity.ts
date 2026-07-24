// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/curiosity-engine/src/schemas/curiosity.ts

import { Observation } from './observation';
import { CuriosityArchetype } from '../taxonomy/curiosity-archetypes';

/**
 * A Curiosity is a structured gap between observed reality and understood reality.
 * It does not ask a question; it defines an epistemic void.
 */
export interface CuriosityGap {
  id: string;
  archetype: CuriosityArchetype;
  observation: Observation;
  
  uncertainty: string;        // e.g., "Unknown heat source and energy transformation"
  impact: string;             // e.g., "Device performance decreases"
  investigationGoal: string;  // e.g., "Identify mechanisms causing temperature increase"
}
