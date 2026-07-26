export interface EcosystemNode {
  capability: number;
  trust: number;
  adaptation: number;
  collaboration: number;
  
  // Musa variables
  valueCreated: number;
  peopleEmpowered: number;
  resourcesConsumed: number;
}

export class AcriPollinationEngine {
  
  /**
   * Calculates the Flower Health of a capability node.
   * Beauty = Genetic Potential × Environmental Support × Collaboration × Time
   * Innovation = Capability × Trust × Collaboration × Adaptation
   */
  public calculateFlowerHealth(node: EcosystemNode): number {
    return node.capability * node.trust * node.collaboration * node.adaptation;
  }

  /**
   * Calculates the Musa Index (The Trust King Model).
   * M = (Value Created × People Empowered × Trust Built) / Resources Consumed
   */
  public calculateMusaIndex(node: EcosystemNode): number {
    const resources = node.resourcesConsumed === 0 ? 1 : node.resourcesConsumed;
    return (node.valueCreated * node.peopleEmpowered * node.trust) / resources;
  }
}
