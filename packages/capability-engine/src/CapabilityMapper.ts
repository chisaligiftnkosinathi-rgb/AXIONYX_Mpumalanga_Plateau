export interface SupplierRiskAssessment {
  replacementRisk: number;
  costRisk: number;
  innovationRisk: number;
  strategicRisk: number;
  overallVulnerability: number;
}

export class CapabilityMapper {
  public assessSupplierRisk(
    hasLocalAlternatives: boolean,
    localCostAdvantage: boolean,
    technologyShift: boolean,
    nationalAlignment: boolean
  ): SupplierRiskAssessment {
    
    const replacementRisk = hasLocalAlternatives ? 0.8 : 0.2;
    const costRisk = localCostAdvantage ? 0.7 : 0.3;
    const innovationRisk = technologyShift ? 0.9 : 0.4;
    const strategicRisk = !nationalAlignment ? 0.8 : 0.2;

    const overallVulnerability = (replacementRisk + costRisk + innovationRisk + strategicRisk) / 4;

    return {
      replacementRisk,
      costRisk,
      innovationRisk,
      strategicRisk,
      overallVulnerability
    };
  }

  public mapMobilityEcosystem() {
    return {
      environment: "Southern African Mobility",
      demandSignal: "Reliable 14-seat vehicle for income generation",
      capabilityGap: "Local advanced materials transformation (e.g. Platinum to Fuel Cells)",
      supplierResponse: "Current reliance on imported components",
      realityTest: {
        intentIntegrity: 0.95,
        evidenceStrength: 0.75,
        executionReality: 0.45,
        learningPotential: 1.00,
        state: "FOUNDATIONAL OPPORTUNITY"
      }
    };
  }
}
