// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/evidence-engine/src/schemas/source.ts

export interface EvidenceSource {
  id: string;
  type: 'SIMULATION' | 'HISTORICAL_DATA' | 'PHYSICAL_SENSOR' | 'LITERATURE';
  origin: string; // e.g. "Computational Engine", "NOAA Climate Data"
  reliabilityScore: number; // 0.0 to 1.0
}
