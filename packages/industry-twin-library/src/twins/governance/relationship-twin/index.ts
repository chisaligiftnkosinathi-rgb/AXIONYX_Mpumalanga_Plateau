// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/industry-twin-library/src/twins/governance/relationship-twin/index.ts

export type RelationshipType = 
  | 'UNKNOWN' 
  | 'EMPLOYED_BY' 
  | 'REPORTS_TO' 
  | 'APPROVED' 
  | 'SIGNED' 
  | 'PAID' 
  | 'OWNED_BY' 
  | 'COMMUNICATED_WITH';

export interface EvidenceSource {
  evidenceId: string;
  documentType: string;
  reliability: number; // 0.0 - 1.0
}

export class RelationshipTwin {
  public type: RelationshipType;
  public confidenceScore: number;
  public sources: EvidenceSource[];

  constructor() {
    // Fundamental Principle: Absence of evidence is not evidence of absence.
    this.type = 'UNKNOWN';
    this.confidenceScore = 0.0;
    this.sources = [];
  }

  /**
   * Evaluates incoming evidence to establish or strengthen a relationship.
   */
  ingestEvidence(evidence: EvidenceSource, proposedType: RelationshipType) {
    if (this.type === 'UNKNOWN') {
      this.type = proposedType;
      this.sources.push(evidence);
      this.confidenceScore = evidence.reliability;
      console.log(`[Relationship Engine] Established new edge: ${proposedType} (Confidence: ${(this.confidenceScore * 100).toFixed(1)}%)`);
    } else if (this.type === proposedType) {
      this.sources.push(evidence);
      // Naive bayesian-style confidence increase with multiple independent sources
      this.confidenceScore = this.confidenceScore + (evidence.reliability * (1 - this.confidenceScore));
      console.log(`[Relationship Engine] Strengthened edge: ${proposedType} (New Confidence: ${(this.confidenceScore * 100).toFixed(1)}%)`);
    } else {
      console.log(`[Relationship Engine] WARNING: Evidence contradicts existing relationship state.`);
    }
  }
}
