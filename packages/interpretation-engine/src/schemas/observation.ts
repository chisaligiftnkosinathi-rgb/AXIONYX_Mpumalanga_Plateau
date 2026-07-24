// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/src/schemas/observation.ts

/**
 * An Observation records a raw state transition computed by the Computational Engine.
 */
export interface Observation {
  id: string;
  entityId: string;
  previousState: Record<string, any>;
  newState: Record<string, any>;
  trigger: string;
  measurement: string; // e.g., "Ice became Liquid triggered by Heat increase"
  timestamp: Date;
}
