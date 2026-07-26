export interface EnvironmentalSeason {
  id: string;
  condition: 'ABUNDANCE' | 'DROUGHT' | 'NIGHT';
  resourceLevel: number; // 0.0 to 1.0 (Capital, Energy, Materials)
  pressureLevel: number; // 0.0 to 1.0
}

export interface CapabilityState {
  id: string;
  name: string;
  functionalOutput: number; // 0.0 to 1.0
  memoryPreserved: boolean; // Has the capability encoded its existence into a standard/record?
  stateTransition: 'ACTIVE' | 'SACRIFICED' | 'TRANSFORMED';
}

export class DendrochronologyEngine {
  
  /**
   * Calculates the Civilization Drought Index (Resilience)
   * Resilience = Capability Maintained Under Pressure / Resource Reduction
   */
  public calculateResilience(season: EnvironmentalSeason, capability: CapabilityState): number {
    if (season.condition !== 'DROUGHT') return 1.0; // Perfect resilience in abundance
    const resourceReduction = 1.0 - season.resourceLevel;
    if (resourceReduction === 0) return 1.0;
    
    // How much capability was maintained despite the reduction?
    const resilience = capability.functionalOutput / resourceReduction;
    return Math.min(resilience, 1.0); // Cap at 1.0
  }

  /**
   * Evaluates the Evolutionary Growth Equation
   * Growth = Resource Conversion × Memory Preservation × Adaptation
   */
  public evaluateGrowthRing(season: EnvironmentalSeason, capability: CapabilityState) {
    const resilience = this.calculateResilience(season, capability);
    const hasMemory = capability.memoryPreserved;

    if (season.condition === 'NIGHT' || capability.stateTransition === 'SACRIFICED') {
      if (hasMemory) {
        return {
          ringType: 'SACRIFICE_RING',
          diagnosis: 'The physical state has ended, but its intelligence is encoded. It has become a warning or a standard for future generations.',
          legacyActive: true
        };
      } else {
        return {
          ringType: 'FORGOTTEN_LOSS',
          diagnosis: 'The system failed and preserved no memory. The tragedy will repeat.',
          legacyActive: false
        };
      }
    }

    if (season.condition === 'DROUGHT') {
      if (resilience > 0.7 && hasMemory) {
        return {
          ringType: 'HARDENED_ADAPTATION_RING',
          diagnosis: 'The drought proved the tree. The system maintained function during scarcity and encoded the adaptation as a new standard.',
          legacyActive: true
        };
      } else {
        return {
          ringType: 'FRAGILE_RING',
          diagnosis: 'The system collapsed under pressure. The next storm will break it.',
          legacyActive: false
        };
      }
    }

    return {
      ringType: 'EXPANSION_RING',
      diagnosis: 'Standard growth during a season of abundance. True capability is not yet tested.',
      legacyActive: true
    };
  }
}
