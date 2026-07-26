export class CapabilityEntropy {
  /**
   * Applies the Capability Entropy Principle.
   * A node with high capability but low contribution will experience influence decay.
   */
  public calculateInfluence(
    baseCapabilityScore: number,
    collaborationFrequency: number,
    ecosystemContribution: number
  ): number {
    const contributionRatio = (collaborationFrequency + ecosystemContribution) / 100;
    
    // If contribution is low, entropy reduces the active influence of the capability
    const entropyMultiplier = Math.max(0.1, contributionRatio);
    
    return baseCapabilityScore * entropyMultiplier;
  }
}
