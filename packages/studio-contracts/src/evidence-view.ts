// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/studio-contracts/src/evidence-view.ts

/**
 * Visual primitive representing "Show me why this conclusion exists".
 * The frontend uses this to allow click-through from Principle -> Evidence -> Simulation.
 */
export interface EvidenceView {
  id: string;
  description: string; // e.g. "Experiment 1: Water phase change"
  simulationRunId: string; // To load the simulation in the timeline
  confidenceContribution: number;
}
