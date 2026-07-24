// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/simulation/simulation-world.ts

import { Entity } from '@axionyx/structure-engine/src/schemas/entity';
import { Relationship } from '@axionyx/structure-engine/src/schemas/relationship';

export interface Field {
  id: string;
  type: string;
  strength: number;
}

export interface SimulationEvent {
  id: string;
  timestamp: number;
  trigger: string;
  impactedEntities: string[];
}

/**
 * The universal container for a digital twin.
 * It holds the entire state of the simulation at a given tick.
 */
export interface SimulationWorld {
  id: string;
  tick: number;
  entities: Entity[];
  relationships: Relationship[];
  fields: Field[];
  events: SimulationEvent[];
  rules: string[];
}
