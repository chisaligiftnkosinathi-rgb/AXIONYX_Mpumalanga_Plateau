// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/event-stream/src/events/flow-events.ts

export interface FlowTransitionEvent {
  id: string;
  type: 'FLOW_INTENSITY_CHANGE' | 'FLOW_REDIRECTION';
  flowId: string;
  source: string;
  target: string;
  previousIntensity: number;
  newIntensity: number;
  cause: string;
  timestamp: Date;
}
