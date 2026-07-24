// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/energy-intelligence-engine/src/circularity/resource-dependency.ts

export interface ResourceDependency {
  resourceId: string;
  criticalityScore: number; // 0.0 to 1.0
  geopoliticalRisk: number; // 0.0 to 1.0
  supplyChainVulnerability: number;
}
