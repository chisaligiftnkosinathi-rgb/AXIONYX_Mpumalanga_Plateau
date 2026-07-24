// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/timeline-engine/src/index.ts

export interface TimelineEvent {
  timestamp: string;
  action: string;
  evidenceId: string;
  resultingState: string;
}

export class TimelineEngine {
  private events: TimelineEvent[] = [];

  /**
   * Assembles disparate evidence into a chronological sequence of State Changes.
   */
  ingestEvent(event: TimelineEvent) {
    this.events.push(event);
    this.events.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
    console.log(`[Timeline Engine] Ingested Event: ${event.action} -> State: [${event.resultingState}] (Evidenced by: ${event.evidenceId})`);
  }

  getChronology() {
    return this.events;
  }
}
