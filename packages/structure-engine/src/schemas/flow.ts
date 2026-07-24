// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/structure-engine/src/schemas/flow.ts

import { Entity } from './entity';

/**
 * A Flow represents the movement of something (energy, capital, resources) 
 * between entities within the structure graph.
 */
export interface Flow {
  source: Entity;
  destination: Entity;
  quantity: number;
  direction: 'unidirectional' | 'bidirectional';
  constraints: string[];
}
