export class PossibilityMutation {
  public calculateMutation(pressure: string, existingDNA: string[]): string {
    if (pressure === 'Coal Transition' && existingDNA.includes('Analytical Chemistry')) {
      return 'Environmental Intelligence Industry';
    }
    return 'Unknown Mutation';
  }
}
