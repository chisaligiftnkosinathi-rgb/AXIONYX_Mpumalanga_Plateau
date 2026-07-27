export class ActivationEnergyCalculator {
  public calculate(exoIntensity: number, coordinationDelay: number): number {
    // Higher pressure + higher delay = massive energy required to spark a reaction
    return (exoIntensity * 0.5) + (coordinationDelay * 2.0);
  }
}
