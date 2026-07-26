export interface DesignedSystem {
  id: string;
  name: string;
  complexityScore: number; // 0.0 to 1.0
  livingSystemSensors: number; // 0.0 to 1.0 (Inclusion of route guardians, citizens, informal operators)
}

export class HumanInclusionEngine {
  
  /**
   * Calculates the Human-System Inclusion Index (HSII)
   * HSII = Living System Sensors / Designed Complexity
   */
  public calculateHSII(system: DesignedSystem): number {
    if (system.complexityScore === 0) return 1.0;
    const hsii = system.livingSystemSensors / system.complexityScore;
    // Cap at 1.0
    return Math.min(hsii, 1.0);
  }

  /**
   * Evaluates the gap between designed reality and actual reality.
   */
  public evaluateSystemBoundary(system: DesignedSystem) {
    const hsii = this.calculateHSII(system);

    if (system.complexityScore > 0.7 && system.livingSystemSensors < 0.2) {
      return {
        hsii,
        status: 'HIGH_FRICTION_RISK',
        diagnosis: 'The plan is highly complex but structurally blind. It excludes the people operating in reality.',
        intervention: 'Deploy Route Guardians and Informal Operators as primary sensor nodes before proceeding.'
      };
    }

    if (hsii >= 0.8) {
      return {
        hsii,
        status: 'INTEGRATED_CAPABILITY',
        diagnosis: 'Designed architecture perfectly matches the living heartbeat of the people.',
        intervention: 'System is highly adaptive. Uncertainty becomes a research opportunity.'
      };
    }

    return {
      hsii,
      status: 'MODERATE_UNCERTAINTY',
      diagnosis: 'Partial inclusion. Some missing actors create isolated friction points.',
      intervention: 'Identify excluded voices and map their environmental knowledge into the engine.'
    };
  }
}
