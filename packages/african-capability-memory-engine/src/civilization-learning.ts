export class CivilizationLearning {
  public detectRepeatingPattern(events: string[]): string {
    const hasCapabilityLoss = events.some(e => e.includes('laboratory closure') || e.includes('brain drain'));
    const hasEconomicDecline = events.some(e => e.includes('economic stagnation'));

    if (hasCapabilityLoss && hasEconomicDecline) {
      return 'CIVILIZATIONAL PATTERN DETECTED: Capability erosion consistently precedes economic stagnation. Protect critical nodes (Melos Prime).';
    }
    return 'Monitoring ecosystem equilibrium.';
  }
}
