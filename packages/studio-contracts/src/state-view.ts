// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/state-view.ts

/**
 * Visual primitive representing "Current condition".
 * The frontend uses this to render color/state indicators (e.g. Stable, Warning).
 */
export interface StateView {
  label: string; // e.g. "85%", "High flow", "Expansion"
  statusIndicator: 'stable' | 'warning' | 'transition' | 'critical';
  metrics: Record<string, number | string>;
}
