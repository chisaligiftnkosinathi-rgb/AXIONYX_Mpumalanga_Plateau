// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/computational-engine/src/core/event-engine.ts

import { SimulationEvent } from '../simulation/simulation-world';

export class EventEngine {
  private eventQueue: SimulationEvent[] = [];

  pushEvent(event: SimulationEvent): void {
    this.eventQueue.push(event);
  }

  processEvents(currentTick: number): SimulationEvent[] {
    const activeEvents = this.eventQueue.filter(e => e.timestamp <= currentTick);
    this.eventQueue = this.eventQueue.filter(e => e.timestamp > currentTick);
    return activeEvents;
  }
}
