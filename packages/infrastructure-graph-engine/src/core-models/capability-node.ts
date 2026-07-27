export interface CorridorHealthMetrics {
  connectivityIndex: number;
  conversionIndex: number;
  learningIndex: number;
  resilienceIndex: number;
  sovereigntyIndex: number;
}

export interface CapabilityEvidence {
  verified: boolean;
  sources: string[];
}

export interface CapabilityNode {
  id: string;
  location: string;
  physicalAssets: string[];
  digitalAssets: string[];
  institutionalAssets: string[];
  capabilityGenome: string[];
  evidence: CapabilityEvidence;
  connectivity: string[]; // Connected Node IDs
}

export interface Corridor {
  id: string;
  name: string;
  nodes: CapabilityNode[];
  health: CorridorHealthMetrics;
}
