export interface CapabilityEvidence {
  type: string;
  strength: number; // 0-100
}

export interface HumanCapabilityGenome {
  identity: string;
  knowledge: string[];
  experience: string[];
  evidence: CapabilityEvidence[];
  potential: string[];
}

export class GenomeMapper {
  public calculateCapabilityDensity(genome: HumanCapabilityGenome): number {
    return genome.knowledge.length * 10 + genome.experience.length * 15;
  }
}
