// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/trust-memory/src/index.ts

export class TrustMemory {
  private history: Map<string, number[]> = new Map();

  /**
   * Tracks trust scores over time to predict sensor degradation or systemic issues.
   */
  record(assetId: string, trustScore: number) {
    if (!this.history.has(assetId)) {
      this.history.set(assetId, []);
    }
    this.history.get(assetId)!.push(trustScore);
    
    this.analyzeTrend(assetId);
  }

  private analyzeTrend(assetId: string) {
    const scores = this.history.get(assetId)!;
    if (scores.length >= 3) {
      const recent = scores.slice(-3);
      if (recent[0] > 90 && recent[1] < 80 && recent[2] < 50) {
        console.log(`[Trust Memory] WARNING: Rapid trust degradation detected for ${assetId}. Predictive maintenance required.`);
      }
    }
  }
}
