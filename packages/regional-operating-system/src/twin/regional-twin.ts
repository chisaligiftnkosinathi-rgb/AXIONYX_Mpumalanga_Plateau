export type GranularityLayer = 'CONTINENTAL' | 'COUNTRY' | 'PROVINCE' | 'DISTRICT' | 'MUNICIPALITY' | 'WARD' | 'NODE';

export interface RegionalGenome {
  layer: GranularityLayer;
  name: string;
  humanPopulation: number;
  activeCapabilities: string[];
  industrialPressures: string[];
  institutions: string[];
  infrastructureNodes: string[];
  activeOpportunities: string[];
}

export class RegionalTwin {
  public zoom(genome: RegionalGenome, targetLayer: GranularityLayer): string {
    return `Zooming from ${genome.layer} to ${targetLayer} in ${genome.name}`;
  }

  public scanRegionalGaps(genome: RegionalGenome): string[] {
    // Example: If mining pressure exists but sampling capability is missing
    const gaps: string[] = [];
    if (genome.industrialPressures.includes('Mining Compliance') && !genome.activeCapabilities.includes('Environmental Sampling')) {
      gaps.push('Sampling Capability Gap');
    }
    return gaps;
  }
}
