export interface MobilitySignal {
  signalId: string;
  source: 'E_HAILING_DRIVER' | 'FLEET_OPERATOR';
  metrics: {
    tripsPerDay: number;
    maintenanceFrequency: number;
    partsAvailability: number;
  };
}

export class MobilitySignalEngine {
  
  /**
   * Calculates the Mobility Pressure Index (MPI)
   * High MPI = High environmental demand for transport solutions.
   */
  public calculateMPI(signal: MobilitySignal): number {
    return Math.min(signal.metrics.tripsPerDay / 100, 1.0); // Simplified normalization
  }

  /**
   * Calculates the Industrial Opportunity Index (IOI)
   * High IOI = Large capability gap that requires an industrial response (e.g. local parts mfg).
   */
  public calculateIOI(mpi: number, partsAvailability: number): number {
    const capabilityGap = 1.0 - partsAvailability;
    return mpi * capabilityGap;
  }

  /**
   * Calculates the Reality Translation Efficiency (RTE)
   * RTE = Industrial Responses Created / Validated Reality Signals
   */
  public calculateRTE(responsesCreated: number, validatedSignals: number): number {
    if (validatedSignals === 0) return 0;
    return responsesCreated / validatedSignals;
  }

  /**
   * Processes a burst of signals to detect if a systemic NC should be generated.
   */
  public processSignals(signals: MobilitySignal[]): { ioi: number, triggerReaction: boolean } {
    if (signals.length === 0) return { ioi: 0, triggerReaction: false };

    const avgMPI = signals.reduce((sum, s) => sum + this.calculateMPI(s), 0) / signals.length;
    const avgPartsAvailability = signals.reduce((sum, s) => sum + s.metrics.partsAvailability, 0) / signals.length;
    
    const ioi = this.calculateIOI(avgMPI, avgPartsAvailability);
    
    // If the opportunity index is > 0.6, trigger an industrial reaction
    return {
      ioi,
      triggerReaction: ioi > 0.6
    };
  }
}
