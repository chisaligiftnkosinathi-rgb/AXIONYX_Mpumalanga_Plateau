import { VehicleReality } from '../schemas/vehicle-event.schema';

export interface DiagnosisResult {
  observation: string;
  possible_causes: string[];
  confidence: 'LOW' | 'MEDIUM' | 'HIGH';
  evidence: string[];
}

export class DiagnosisEngine {
  /**
   * Translates raw vehicle reality into deterministic condition states.
   * Does NOT hallucinate absolute certainty if evidence is merely observational.
   */
  static diagnose(reality: VehicleReality): DiagnosisResult {
    const tempObs = reality.observations.find(o => o.measurement === 'coolant_temperature_pattern');
    
    if (tempObs && tempObs.value === 'above_normal_variation') {
      return {
        observation: "temperature variation detected",
        possible_causes: ["cooling system inspection recommended"],
        confidence: "MEDIUM",
        evidence: ["telemetry_pattern", "maintenance_history"]
      };
    }

    return {
      observation: "nominal",
      possible_causes: [],
      confidence: "HIGH",
      evidence: ["telemetry_pattern"]
    };
  }
}
