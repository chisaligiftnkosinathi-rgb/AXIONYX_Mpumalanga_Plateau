export interface StructuredCapabilityNeed {
  domain: string;
  problem: string;
  required_capabilities: string[];
  location: string;
  evidence_required: string[];
  potential_collaborators: string[];
  learning_opportunity: string;
}

export class SignalExtractor {
  
  private readonly PROMPT_TEMPLATE = `
You are the ACRI Translation Engine.

Your purpose:
Convert human reality signals into structured capability requirements.

Input:
{raw_message}

Extract:
1. Reality Need (problem)
2. Scientific Domain (domain)
3. Required Capability (required_capabilities)
4. Evidence Needed (evidence_required)
5. Potential Collaborators (potential_collaborators)
6. Learning Opportunity (learning_opportunity)

Do not invent certainty. Mark unknown information as UNKNOWN.
`;

  public async extractCapabilityNeed(rawMessage: string): Promise<StructuredCapabilityNeed> {
    // In production, this would call an LLM (e.g., Gemini) with the PROMPT_TEMPLATE.
    // For the AXIONYX Mpumalanga Plateau pilot, we return the parsed structure.
    
    return {
      domain: "environmental_monitoring",
      problem: "affordable_water_sensors_required",
      required_capabilities: [
        "analytical_chemistry",
        "sensor_engineering",
        "data_analysis"
      ],
      location: "UNKNOWN (infer from metadata later)",
      evidence_required: [
        "existing_measurements",
        "environmental_data",
        "sensor_breakage_logs"
      ],
      potential_collaborators: [
        "local_manufacturers",
        "testing_laboratories"
      ],
      learning_opportunity: "Analyze why current sensors break to design a more resilient standard."
    };
  }
}
