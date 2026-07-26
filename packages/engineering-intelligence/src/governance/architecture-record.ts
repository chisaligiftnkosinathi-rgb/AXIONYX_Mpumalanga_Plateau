import { EngineeringEvent } from '../schemas/engineering-event.schema';

export interface ADR {
  id: string;
  decision: string;
  reason: string;
  evidence: string[];
}

export class ArchitectureRecord {
  /**
   * Translates raw architecture_decision events into formal Architecture Decision Records.
   */
  static extractADRs(events: EngineeringEvent[]): ADR[] {
    return events
      .filter(e => e.type === 'architecture_decision')
      .map(e => ({
        id: \`ADR-\${e.id}\`,
        decision: e.decision || 'Unknown',
        reason: 'Derived from project learning or requirements.',
        evidence: e.evidence
      }));
  }
}
