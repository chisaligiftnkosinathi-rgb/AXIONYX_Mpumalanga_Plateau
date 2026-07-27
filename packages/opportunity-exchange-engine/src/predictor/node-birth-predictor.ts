export class NodeBirthPredictor {
  public predict(capabilities: string[], need: string): string {
    if (capabilities.includes('Analytical Chemist') && need === 'Sampling Gap') {
      return 'Melokuhle Sampling Node';
    }
    if (capabilities.includes('Mechanical Knowledge') && need === 'Vehicle Downtime') {
      return 'Intelligent Car Doctor Node';
    }
    return 'Generic Node';
  }
}
