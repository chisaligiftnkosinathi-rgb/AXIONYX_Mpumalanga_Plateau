export class MobilityIntelligenceEngine {
  public parseCustomerSignal(signal: string): any {
    console.log(`[MobilityIntelligence] Parsing: "${signal}"`);
    if (signal.includes("South African vehicle") && signal.includes("history")) {
      return {
        intent: "collector_vehicle",
        location: "USA",
        purpose: "collection",
        budget: "premium",
        interest: "South African automotive heritage"
      };
    }
    return { intent: "unknown" };
  }
}
