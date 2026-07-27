import { IndustryGenome } from '../industry-genome/industry-genome';

export interface RealityShockVector {
  energy: number;       // 0.0 to 1.0
  capital: number;
  talent: number;
  trust: number;
  supplyChain: number;
  regulation: number;
}

export class ShockMetabolism {
  /**
   * Simulates the continuous degradation and recovery of an industry under shock.
   */
  public simulateShock(genome: IndustryGenome, shockVector: RealityShockVector): IndustryGenome {
    // A living industry metabolizes shock into learning
    const maxShock = Math.max(
      shockVector.energy,
      shockVector.capital,
      shockVector.talent,
      shockVector.trust,
      shockVector.supplyChain,
      shockVector.regulation
    );

    // Degrade base probability based on shock exposure
    const degradation = maxShock * (1 - genome.resilienceProfile.shockExposure);
    let newIEPI = genome.emergenceProbability - (genome.emergenceProbability * degradation);

    // Apply adaptation metabolism
    newIEPI = newIEPI * (1 + genome.resilienceProfile.learningRate * genome.resilienceProfile.adaptationCapacity);
    
    return {
      ...genome,
      emergenceProbability: Math.min(newIEPI, 1.0) // Cap at 100%
    };
  }
}
