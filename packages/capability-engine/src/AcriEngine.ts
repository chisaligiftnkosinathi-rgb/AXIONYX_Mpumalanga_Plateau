export interface EvidenceNode {
  id: string;
  qualityScore: number;
  date: number; // Unix timestamp
}

export interface ActorNode {
  id: string;
  name: string;
  evidenceHistory: EvidenceNode[];
  longevityYears: number;
}

export class AcriEngine {
  
  /**
   * The Loyalty & Trust Equation: Trust = Consistency * Evidence * Time
   * - Consistency: How steady the quality score is over time
   * - Evidence: The volume and average quality of verified output
   * - Time: Years of survival/longevity
   */
  public calculateTrustScore(actor: ActorNode): number {
    if (actor.evidenceHistory.length === 0) return 0;

    const totalEvidenceQuality = actor.evidenceHistory.reduce((sum, e) => sum + e.qualityScore, 0);
    const averageEvidence = totalEvidenceQuality / actor.evidenceHistory.length;
    
    // Simple consistency metric: penalize high variance
    const variance = actor.evidenceHistory.reduce((sum, e) => sum + Math.pow(e.qualityScore - averageEvidence, 2), 0) / actor.evidenceHistory.length;
    const consistency = Math.max(0, 1 - variance); // If variance is high, consistency drops

    const timeFactor = Math.log10(actor.longevityYears + 1) + 1; // Logarithmic scaling for time

    const trustScore = consistency * averageEvidence * timeFactor;
    return Number(trustScore.toFixed(4));
  }

  /**
   * Function 2: Translate
   * Converts environmental friction into a scientific capability requirement.
   */
  public translateFrictionToResearch(frictionDescription: string): { researchQuestion: string, requiredCapabilities: string[] } {
    if (frictionDescription.includes('coal sensors fail') && frictionDescription.includes('harsh environments')) {
      return {
        researchQuestion: 'How do we design sensors resistant to dust, heat, vibration, and chemical exposure?',
        requiredCapabilities: ['Analytical Chemists', 'Electrical Engineers', 'Materials Scientists', 'Testing Laboratories']
      };
    }
    
    return {
      researchQuestion: 'Uncategorized environmental friction detected. Manual translation required.',
      requiredCapabilities: []
    };
  }
}
