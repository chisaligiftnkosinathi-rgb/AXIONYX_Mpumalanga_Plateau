import { Evidence } from '../schemas/primitives.schema';

export class EvidenceGraph {
  private store: Map<string, Evidence> = new Map();

  record(evidence: Evidence): void {
    if (this.store.has(evidence.id)) {
      throw new Error(`Evidence ${evidence.id} already exists.`);
    }
    this.store.set(evidence.id, evidence);
    console.log(`[EvidenceGraph] Recorded evidence: ${evidence.id} for event ${evidence.eventId}`);
  }

  get(id: string): Evidence | undefined {
    return this.store.get(id);
  }

  verify(id: string): boolean {
    const evidence = this.store.get(id);
    if (!evidence) return false;
    
    // In a real implementation, this would verify the cryptographic signature against the hash
    return evidence.verified;
  }
}
