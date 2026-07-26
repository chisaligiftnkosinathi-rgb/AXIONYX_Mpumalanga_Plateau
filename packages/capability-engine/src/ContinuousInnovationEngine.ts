export interface InnovationContext {
  pressure: number; // 0.0 to 1.0 (Environmental Need / Friction)
  observation: number; // 0.0 to 1.0 (Signal Detection)
  evidence: number; // 0.0 to 1.0 (Quality System Validation)
  learning: number; // 0.0 to 1.0 (Understanding of Mechanism)
  adaptiveAction: number; // 0.0 to 1.0 (Experimentation & Scaling)
  timeInvested: number; // Duration
  resourcesInvested: number; // Capital/Effort
  validatedCapabilitiesCreated: number; // Output count
}

export class ContinuousInnovationEngine {
  
  /**
   * Calculates the Innovation Emergence probability.
   * I = P × O × E × L × A
   * If any factor is zero, Innovation equals zero.
   */
  public calculateInnovationSuccess(context: InnovationContext): number {
    return context.pressure * context.observation * context.evidence * context.learning * context.adaptiveAction;
  }

  /**
   * Calculates Innovation Conversion Velocity (ICV)
   * ICV = Validated Capabilities Created / (Time + Resources)
   */
  public calculateICV(context: InnovationContext): number {
    const totalInput = context.timeInvested + context.resourcesInvested;
    if (totalInput === 0) return 0;
    return context.validatedCapabilitiesCreated / totalInput;
  }

  /**
   * Acts as the Innovation Immune System
   */
  public evaluateMetabolism(context: InnovationContext) {
    const successProbability = this.calculateInnovationSuccess(context);
    const icv = this.calculateICV(context);

    if (context.pressure > 0.8 && context.evidence === 0) {
      return {
        stateTransition: 0,
        icv,
        systemResponse: 'IMMUNE_SYSTEM_BLOCK',
        action: 'High pressure detected, but evidence is zero. Scaling blocked to prevent systemic failure. Demand rigorous experimentation.'
      };
    }

    if (successProbability > 0.5) {
      return {
        stateTransition: 1,
        icv,
        systemResponse: 'CAPABILITY_ACTIVATED',
        action: 'Innovation successfully converted pressure into validated capability. Scale the solution.'
      };
    }

    return {
      stateTransition: 0,
      icv,
      systemResponse: 'CAPABILITY_INACTIVE',
      action: 'Innovation metabolism is stalled. Identify the broken node (Observation, Evidence, or Action) and repair the link.'
    };
  }
}
