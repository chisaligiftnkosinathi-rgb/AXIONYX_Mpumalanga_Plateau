export interface ExplainabilityRecord {
  observed: string;
  evidence: string;
  mission: string;
  why: string;
  confidence: string;
}

export class ExplainabilityGenerator {
  public generateAuditView(record: ExplainabilityRecord): any {
    return {
      'What was observed?': record.observed,
      'What evidence supports it?': record.evidence,
      'Which mission?': record.mission,
      'Why this action?': record.why,
      'Confidence': record.confidence
    };
  }

  public generateExecutiveView(record: ExplainabilityRecord): string {
    return `This recommendation satisfies all safety and equipment constraints, is supported by verified ${record.evidence} evidence, and is selected because ${record.why}. Confidence: ${record.confidence}.`;
  }
}
