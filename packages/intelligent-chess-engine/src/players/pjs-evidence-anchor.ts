export class PjsEvidenceAnchor {
  public evaluateTruth(moveDescription: string): number {
    // PJS Lab asks: "Is it true? Is there evidence?"
    const requiresMeasurement = moveDescription.includes('sampling') || moveDescription.includes('science');
    return requiresMeasurement ? 95 : 80;
  }
}
