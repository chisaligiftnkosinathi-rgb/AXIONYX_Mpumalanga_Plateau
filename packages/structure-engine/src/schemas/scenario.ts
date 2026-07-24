// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/structure-engine/src/schemas/scenario.ts

import { State } from './state';

export interface Transition {
  fromState: State;
  toState: State;
  triggerEvent: string;
}

/**
 * A Scenario simulates potential future states by tracing flows and relationships
 * from an initial state.
 */
export interface Scenario {
  initialState: State;
  events: string[];
  possibleTransitions: Transition[];
  outcomes: State[];
  confidence: number;
}
