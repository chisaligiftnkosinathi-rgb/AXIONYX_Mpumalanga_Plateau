export interface FailureNode {
  type: 'TOXIC' | 'HONEST'; // Toxic = Fraud/Negligence, Honest = Boundary Push/Environment
  rootCauseIdentified: boolean;
  correctionImplemented: boolean;
  newStandardCreated: boolean;
}

export class EvolutionaryCreditEngine {
  
  /**
   * C_new = C_old + L_f + L_s
   * Calculates the learning extracted from a failure (L_f)
   */
  public calculateFailureIntelligence(failure: FailureNode): number {
    if (failure.type === 'TOXIC') return 0; // Toxic failures yield zero intelligence for the actor (they broke trust)
    
    let L_f = 0;
    if (failure.rootCauseIdentified) L_f += 2;
    if (failure.correctionImplemented) L_f += 3;
    if (failure.newStandardCreated) L_f += 5; // Highest reward for creating a civilizational standard
    
    return L_f;
  }

  /**
   * Calculates the Evolutionary Credit Score based on Learning Velocity.
   */
  public calculateEvolutionaryScore(cOld: number, lF: number, lS: number) {
    // If a node has a high C_old but zero failures over a long time, it is untested.
    // If a node has failures but high L_f, it is resilient.
    const cNew = cOld + lF + lS;
    return cNew;
  }

  /**
   * The New Gold Standard (Civilizational Wealth Equation)
   * Wealth = (Verified Capability * Trust * Learning) / Systemic Risk
   */
  public calculateCivilizationalGoldStandard(capability: number, trust: number, learningVelocity: number, systemicRisk: number) {
    if (systemicRisk === 0) systemicRisk = 0.1; // Avoid division by zero
    return (capability * trust * learningVelocity) / systemicRisk;
  }
}
