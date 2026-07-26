import { ResourceConsumptionProfile, calculateTotalConsumption } from '../exchange/ResourceConsumptionProfile';

export class ValueDistributionEngine {
  /**
   * Calculates the Capability Value Index (CVI).
   * 
   * CVI = (Evidence * Trust * Collaboration * Impact) / Resource Consumption
   */
  public calculateCVI(
    evidenceScore: number,
    trustScore: number,
    collaborationStrength: number,
    impactScore: number,
    resources: ResourceConsumptionProfile
  ): number {
    const totalResources = calculateTotalConsumption(resources);
    if (totalResources === 0) return 0; // Prevent division by zero

    const valueGenerated = evidenceScore * trustScore * collaborationStrength * impactScore;
    
    // Normalize CVI to a readable scale (e.g., dividing by an arbitrary scaling factor)
    return Math.round((valueGenerated / totalResources) / 10000); 
  }
}
