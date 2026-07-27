export interface HumanSeed {
  identity: string;
  coreCapability: string;
}

export interface FactoryIngredients {
  humanSeed: HumanSeed;
  knowledgeSubstrate: string[];
  realityPressure: string;
  coordinationLayer: string; // ACON
  capitalEnergy: number;
}

export class CapabilityFactory {
  public validateRecipe(ingredients: FactoryIngredients): boolean {
    return !!(
      ingredients.humanSeed.coreCapability && 
      ingredients.realityPressure && 
      ingredients.capitalEnergy > 0
    );
  }
}
