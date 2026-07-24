// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/world-view.ts

import { EntityView } from './entity-view';
import { FlowView } from './flow-view';
import { StateView } from './state-view';
import { PrincipleView } from './principle-view';

/**
 * Visual primitive representing "Show me the system."
 * Used by the Reality Canvas to render the entire living graph.
 */
export interface WorldView {
  id: string;
  name: string; // e.g. "Earth Water System"
  tick: number; // Current simulation time
  entities: EntityView[];
  flows: FlowView[];
  globalStates: StateView[]; // High-level environmental states (e.g. Temperature)
  activePrinciples: PrincipleView[]; // Principles currently acting on or discovered in the world
}
