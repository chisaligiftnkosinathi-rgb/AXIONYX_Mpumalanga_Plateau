// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/event-stream/src/events/state-events.ts

export interface StateTransitionEvent {
  id: string;
  type: 'STATE_TRANSITION';
  entity: string;
  previousState: string | Record<string, any>;
  newState: string | Record<string, any>;
  cause: string;
  evidence: string[]; // e.g. ["simulation-run-001"]
  timestamp: Date;
}
