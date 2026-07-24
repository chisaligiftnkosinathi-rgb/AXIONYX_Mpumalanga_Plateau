// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/structure-engine/src/schemas/state.ts

import { Entity } from './entity';

/**
 * A State represents the condition of an Entity at a specific moment in time.
 */
export interface State {
  entity: Entity;
  conditions: Record<string, string>;
  measurements: Record<string, number>;
  timestamp: Date;
}
