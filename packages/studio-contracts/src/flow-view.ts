// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/flow-view.ts

/**
 * Visual primitive representing "Something moving" or "How things connect".
 * The frontend uses this to render animated directed edges (Lines/Arrows).
 */
export interface FlowView {
  id: string;
  sourceEntityId: string;
  targetEntityId: string;
  label: string; // e.g. "Energy", "Income", "Water"
  isAnimated: boolean;
  intensity: number; // For determining animation speed or line thickness
}
