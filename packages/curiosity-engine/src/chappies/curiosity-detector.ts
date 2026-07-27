export interface CuriosityEvent {
  question: string;
  domain: string;
}

export class CuriosityDetector {
  public analyzeQuestion(event: CuriosityEvent) {
    return {
      curiosityIdentified: event.domain,
      potentialCapability: `Future ${event.domain} Specialist`,
      futureOpportunity: `${event.domain} Innovation`
    };
  }
}
