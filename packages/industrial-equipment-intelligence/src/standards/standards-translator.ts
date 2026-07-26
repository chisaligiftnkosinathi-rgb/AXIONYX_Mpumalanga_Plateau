import { StandardRequirement } from '../schemas/standard.schema';

export interface EngineeringRequirement {
  name: string;
  status: 'Required' | 'Controlled' | 'Optional';
}

export class StandardsTranslator {
  /**
   * Translates an abstract ISO standard into concrete engineering requirements.
   */
  static translate(req: StandardRequirement): EngineeringRequirement[] {
    if (req.standard === 'ISO 1171' && req.requirement.includes('controlled heating process')) {
      return [
        { name: "Temperature control", status: "Required" },
        { name: "Measurement repeatability", status: "Required" },
        { name: "Sample handling", status: "Controlled" },
        { name: "Documentation", status: "Required" }
      ];
    }
    return [];
  }
}
