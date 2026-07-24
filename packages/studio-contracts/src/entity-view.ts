// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/entity-view.ts

import { StateView } from './state-view';

/**
 * Visual primitive representing "Something that exists".
 * The frontend uses this to render a visual Node (e.g. Circle).
 */
export interface EntityView {
  id: string;
  name: string; // e.g. "Battery", "River", "Company"
  domain: string;
  currentState: StateView;
  position?: { x: number; y: number }; // Optional layout hint
}
