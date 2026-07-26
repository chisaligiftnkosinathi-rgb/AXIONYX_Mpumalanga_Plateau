export class CapabilityQualityEvaluator {
  /**
   * Evaluates a reality signal to determine its capability potential.
   * Target: Signal Quality × Evidence × Trust × Collaboration Potential
   */
  public evaluate(signal: any): number {
    let score = 0;
    
    // Does the signal contain a concrete problem?
    if (signal.problem !== 'UNKNOWN') score += 10;
    
    // Does it define a specific capability requirement?
    if (signal.required_capabilities && signal.required_capabilities.length > 0) score += 20;
    
    // Are they able to provide evidence?
    if (signal.evidence_required && signal.evidence_required.length > 0) score += 30;

    // Collaboration potential (how many nodes can it connect to)
    score += (signal.potential_collaborators?.length || 0) * 5;

    return score;
  }
}
