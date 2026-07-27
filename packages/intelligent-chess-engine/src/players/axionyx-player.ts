export class AxionyxPlayer {
  public evaluateIntelligence(moveDescription: string): number {
    // AXIONYX asks: "What should we do? Does this increase capability coordination?"
    const createsCoordination = moveDescription.includes('connect') || moveDescription.includes('bridge') || moveDescription.includes('enterprise');
    return createsCoordination ? 90 : 75;
  }
}
