// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/event-stream/src/events/simulation-events.ts

export interface SimulationEventRecord {
  id: string;
  type: 'SIMULATION_STARTED' | 'SIMULATION_TICK' | 'SIMULATION_PAUSED' | 'SIMULATION_ENDED';
  simulationRunId: string;
  tickIndex: number;
  parameters: Record<string, any>;
  timestamp: Date;
}
