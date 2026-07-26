import { DesignEvent } from '../schemas/equipment-event.schema';

export interface DDR {
  id: string;
  decision: string;
  reason: string;
  impact: string;
  evidence: string[];
}

export class DesignRecord {
  /**
   * Translates raw events into structured Design Decision Records.
   */
  static extractDDRs(events: DesignEvent[]): DDR[] {
    return events
      .filter(e => e.event === 'design_decision_recorded')
      .map(e => ({
        id: \`DDR-\${e.id}\`,
        decision: e.decision || 'Unknown',
        reason: e.reason || 'Not provided',
        impact: e.impact || 'Unknown',
        evidence: e.evidence
      }));
  }
}
