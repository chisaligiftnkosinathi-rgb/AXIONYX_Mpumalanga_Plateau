export interface DependencyProfile {
  rawMaterialDependency: number;
  technologyDependency: number;
  supplyChainDependency: number;
  knowledgeDependency: number;
}

export class CCEICalculator {
  /**
   * Calculates the Dependency Risk Index (DRI).
   */
  public calculateDRI(profile: DependencyProfile): number {
    return (
      profile.rawMaterialDependency +
      profile.technologyDependency +
      profile.supplyChainDependency +
      profile.knowledgeDependency
    ) / 4;
  }

  /**
   * Calculates the Continental Capability Emergence Index (CCEI).
   */
  public calculateCCEI(
    nationalCapabilities: number,
    compatibility: number,
    trust: number,
    evidence: number,
    learningPotential: number,
    friction: number,
    dependencyProfile: DependencyProfile
  ): number {
    const dri = this.calculateDRI(dependencyProfile);
    const denominator = (friction * dri) || 0.1;
    return (nationalCapabilities * compatibility * trust * evidence * learningPotential) / denominator;
  }
}
