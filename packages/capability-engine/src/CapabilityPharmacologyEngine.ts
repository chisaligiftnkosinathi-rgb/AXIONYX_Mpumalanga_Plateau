export interface MedicineProfile {
  id: string;
  environmentCondition: string; // The Patient Condition
  intentDiagnosis: string; // Extraction vs Capability Development
  diseaseSignal: string; // The Need/Imbalance
  activeIngredient: string; // Core capability (e.g. Manufacturing)
  excipient: string[]; // Support network (e.g. Energy, Finance)
  evidenceMaturity: number; // 0.0 to 1.0 (Quality Tests)
  pharmacovigilanceScore: number; // 0.0 to 1.0 (Learning)
}

export class CapabilityPharmacologyEngine {
  
  /**
   * Classifies an economic capability compound into a safety tier based on evidence and learning.
   */
  public classifyCompound(profile: MedicineProfile): {
    classification: 'DANGEROUS_COMPOUND' | 'EXPERIMENTAL_COMPOUND' | 'TRUSTED_MEDICINE';
    trustIndex: number;
    intervention: string;
  } {
    const trustIndex = profile.evidenceMaturity * profile.pharmacovigilanceScore;

    if (profile.evidenceMaturity < 0.3) {
      return {
        classification: 'DANGEROUS_COMPOUND',
        trustIndex,
        intervention: 'Unmeasured capability introduces systemic risk. Deploy Quality Sensors immediately.'
      };
    }

    if (profile.pharmacovigilanceScore < 0.5) {
      return {
        classification: 'EXPERIMENTAL_COMPOUND',
        trustIndex,
        intervention: 'Capability is measured but learning loop is broken. Implement NC tracking to establish Pharmacovigilance.'
      };
    }

    return {
      classification: 'TRUSTED_MEDICINE',
      trustIndex,
      intervention: 'Compound is verified, safe, and adaptive. Deploy Capital to scale.'
    };
  }

  /**
   * Generates the clinical capability insert for an enterprise.
   */
  public generateCapabilityInsert(profile: MedicineProfile) {
    const classification = this.classifyCompound(profile);
    
    return {
      indication: `TREATMENT FOR: ${profile.diseaseSignal} (Condition: ${profile.environmentCondition})`,
      mechanism: `INTENT: ${profile.intentDiagnosis} -> Delivered via ${profile.activeIngredient} supported by [${profile.excipient.join(', ')}]`,
      dosageAndAdministration: `EVIDENCE SCORE: ${profile.evidenceMaturity} | LEARNING SCORE: ${profile.pharmacovigilanceScore}`,
      clinicalSafety: classification.classification,
      prescribingInformation: classification.intervention
    };
  }
}
