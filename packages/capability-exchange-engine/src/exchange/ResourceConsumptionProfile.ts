export interface ResourceConsumptionProfile {
  energyUsed: number;
  materialUsed: number;
  timeInvested: number;
  financialCapital: number;
  environmentalImpact: number;
  humanEffort: number;
}

export function calculateTotalConsumption(profile: ResourceConsumptionProfile): number {
  return (
    profile.energyUsed +
    profile.materialUsed +
    profile.timeInvested +
    profile.financialCapital +
    profile.environmentalImpact +
    profile.humanEffort
  );
}
