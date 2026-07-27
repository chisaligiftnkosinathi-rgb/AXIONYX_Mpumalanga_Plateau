export class CoordinationDelay {
  public measure(fragmentationCount: number, bureaucracyLevel: number): number {
    // Abstract measurement of how slow the ecosystem is to react
    return (fragmentationCount * 10) + (bureaucracyLevel * 5);
  }
}
