// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/event-stream/src/events/human-events.ts

export interface HumanEventRecord {
  id: string;
  type: 'PARAMETER_CHANGED' | 'SCENARIO_STARTED' | 'INVESTIGATION_LAUNCHED';
  userId: string;
  action: string; // e.g. "Researcher changed sunlight parameter"
  payload: Record<string, any>;
  timestamp: Date;
}
