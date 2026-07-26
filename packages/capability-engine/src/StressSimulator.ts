export interface SimulationInput {
  resources: number;
  knowledge: number;
  manufacturing: number;
  capital: number;
  trust: number;
  translationCapability: number;
}

export interface SimulationOutput {
  effectiveResources: number;
  effectiveKnowledge: number;
  effectiveManufacturing: number;
  effectiveCapital: number;
  effectiveTrust: number;
  ignitionProbability: number;
  reactionState: 'FAILED' | 'LOW' | 'MEDIUM' | 'HIGH';
}

export class StressSimulator {
  
  /**
   * Calculates the industrial ignition probability based on the African Industrial Reaction Equation.
   * Effective Capability = Capability × Translation
   */
  public simulateReaction(input: SimulationInput): SimulationOutput {
    const { resources, knowledge, manufacturing, capital, trust, translationCapability } = input;

    // Translation controls how much of each capability connects
    const effectiveResources = resources * translationCapability;
    const effectiveKnowledge = knowledge * translationCapability;
    const effectiveManufacturing = manufacturing * translationCapability;
    const effectiveCapital = capital * translationCapability;
    const effectiveTrust = trust * translationCapability;

    // The core equation: multiply all effective capabilities together
    // Since each is between 0 and 1, we calculate the geometric mean or an aggregate product to determine ignition probability
    const ignitionProbability = (effectiveResources * effectiveKnowledge * effectiveManufacturing * effectiveCapital * effectiveTrust);

    let reactionState: 'FAILED' | 'LOW' | 'MEDIUM' | 'HIGH' = 'FAILED';
    
    if (ignitionProbability > 0.1) {
      reactionState = 'HIGH';
    } else if (ignitionProbability > 0.05) {
      reactionState = 'MEDIUM';
    } else if (ignitionProbability > 0.01) {
      reactionState = 'LOW';
    } else {
      reactionState = 'FAILED';
    }

    return {
      effectiveResources,
      effectiveKnowledge,
      effectiveManufacturing,
      effectiveCapital,
      effectiveTrust,
      ignitionProbability,
      reactionState
    };
  }
}
