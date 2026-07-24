export interface CapabilityDescriptor {
  type: string;
  description: string;
}

export interface Observation {
  sourceId: string;
  timestamp: string;
  type: string;
  payload: Record<string, any>;
}

export interface IOperationalSystemAdapter {
  connect(): Promise<void>;
  observe(): AsyncIterable<Observation>;
  capabilities(): CapabilityDescriptor[];
  disconnect(): Promise<void>;
}
