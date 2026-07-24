// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/core/computational-node.ts

import { State } from '@axionyx/structure-engine/src/schemas/state';
import { Constraint } from '@axionyx/structure-engine/src/schemas/constraint';

/**
 * A Computational Node represents an Entity infused with deterministic calculation capability.
 */
export interface ComputationalNode {
  entityId: string;
  currentState: State;
  internalRules: string[];
  constraints: Constraint[];
  
  // The mathematical function defining how this node reacts to field pressure and inputs
  transferFunction: (inputs: Record<string, number>) => Record<string, number>;
}
