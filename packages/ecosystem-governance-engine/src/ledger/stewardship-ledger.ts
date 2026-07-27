export interface StewardshipDecision {
  id: string;
  decision: string;
  reason: string;
  evidence: string;
  outcome: string;
  learning: string;
  timestamp: Date;
}

export class StewardshipLedger {
  private ledger: StewardshipDecision[] = [];

  public recordDecision(decision: StewardshipDecision): void {
    this.ledger.push({ ...decision, timestamp: new Date() });
  }

  public getInstitutionalMemory(): StewardshipDecision[] {
    return this.ledger;
  }
}
