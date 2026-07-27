export class Metrics {
  private static store: Record<string, number[]> = {};

  public static recordLatency(stage: string, durationMs: number) {
    if (!this.store[stage]) this.store[stage] = [];
    this.store[stage].push(durationMs);
  }

  public static getAverageLatency(stage: string): number {
    const latencies = this.store[stage];
    if (!latencies || latencies.length === 0) return 0;
    const sum = latencies.reduce((a, b) => a + b, 0);
    return sum / latencies.length;
  }

  public static getBaselineReport(): Record<string, number> {
    const report: Record<string, number> = {};
    for (const [stage, latencies] of Object.entries(this.store)) {
      report[stage] = this.getAverageLatency(stage);
    }
    return report;
  }
}
