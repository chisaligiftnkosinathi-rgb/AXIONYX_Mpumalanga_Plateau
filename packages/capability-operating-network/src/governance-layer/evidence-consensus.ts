export interface EvidenceVote {
  layer: 'SCIENCE' | 'COMMUNITY' | 'INDUSTRY' | 'ENVIRONMENT' | 'GOVERNMENT';
  supportScore: number; // 0.0 to 1.0
  evidenceProvided: string[];
}

export class WeightedEvidenceConsensus {
  private static WEIGHTS = {
    SCIENCE: 0.30,
    COMMUNITY: 0.25,
    INDUSTRY: 0.20,
    ENVIRONMENT: 0.15,
    GOVERNMENT: 0.10
  };

  /**
   * Calculates the decision consensus based on weighted evidence, not arbitrary authority.
   * Authority proposes. Evidence decides.
   */
  public calculateConsensus(votes: EvidenceVote[]): number {
    let totalScore = 0;
    
    votes.forEach(vote => {
      const weight = WeightedEvidenceConsensus.WEIGHTS[vote.layer];
      // Only count the vote if evidence is provided
      const validMultiplier = vote.evidenceProvided.length > 0 ? 1 : 0.1; 
      totalScore += (vote.supportScore * weight * validMultiplier);
    });

    return totalScore;
  }
}
