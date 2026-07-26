export interface VehicleEvent {
  id: string;
  type: 'vehicle_registered' | 'service_event' | 'observation_created';
  timestamp: string;
}

export interface VehicleObservation {
  measurement: string;
  value: string;
  confidence: 'OBSERVED' | 'INFERRED' | 'HYPOTHETICAL';
}

export interface VehicleReality {
  reality_id: string;
  identity: {
    vehicle_type: string;
    manufacturer: string;
    model: string;
    mileage_km: number;
    purpose: string;
  };
  events: VehicleEvent[];
  observations: VehicleObservation[];
  evidence: string[];
}
