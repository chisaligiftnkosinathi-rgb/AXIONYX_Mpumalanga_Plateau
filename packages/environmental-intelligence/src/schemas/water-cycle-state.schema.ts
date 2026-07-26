export type WaterState = 'PRECIPITATION' | 'SURFACE_WATER' | 'COLLECTION' | 'TREATMENT' | 'DISTRIBUTION' | 'CONSUMPTION' | 'RETURN_FLOW' | 'RENEWAL';

export interface Observation {
  parameter: string;
  value: number;
}

export interface StateRecord {
  state: WaterState;
  observations: Observation[];
}

export interface StateTransition {
  from: WaterState;
  to: WaterState;
  evidence: string[];
}

export interface WaterCycleReality {
  reality_id: string;
  environment: { location: string };
  states: StateRecord[];
  transitions: StateTransition[];
}
