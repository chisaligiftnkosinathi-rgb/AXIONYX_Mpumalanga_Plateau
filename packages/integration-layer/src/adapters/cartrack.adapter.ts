import { Asset, Event } from '../../../engineering-os-kernel/src/schemas/primitives.schema';
import { SystemAdapter, Normaliser, EvidenceMapper } from '../framework/adapter';

export interface CartrackPayload {
  vehicle_id: string;
  timestamp: string;
  gps: {
    lat: number;
    lng: number;
  };
  speed_kmh: number;
  odometer_km: number;
  engine_temp_c: number;
}

export class CartrackNormaliser implements Normaliser {
  normalise(rawPayload: CartrackPayload): Event {
    return {
      id: `evt_cartrack_${Date.now()}`,
      timestamp: rawPayload.timestamp,
      source: 'cartrack',
      type: 'telemetry',
      payload: rawPayload
    };
  }
}

export class CartrackEvidenceMapper implements EvidenceMapper {
  mapToEvidenceGraph(rawPayload: CartrackPayload): string[] {
    // In a real scenario, this would cryptographically hash the payload and store it in the Evidence Graph.
    // For this kernel proof, we generate a mock Evidence ID.
    const simpleHash = Buffer.from(JSON.stringify(rawPayload)).toString('base64').substring(0, 16);
    return [`evd_${simpleHash}`];
  }
}

export class CartrackAdapter implements SystemAdapter {
  name = 'CartrackAdapter';
  normaliser = new CartrackNormaliser();
  evidenceMapper = new CartrackEvidenceMapper();

  ingest(rawPayload: CartrackPayload): Partial<Asset> {
    const event = this.normaliser.normalise(rawPayload);
    const evidenceIds = this.evidenceMapper.mapToEvidenceGraph(rawPayload);

    // Returns a partial Asset update (Stewardship Twin update)
    return {
      id: `asset_vehicle_${rawPayload.vehicle_id}`,
      domain: 'vehicle',
      state: {
        status: rawPayload.speed_kmh > 0 ? 'operating' : 'offline',
        metrics: {
          speed: rawPayload.speed_kmh,
          temperature: rawPayload.engine_temp_c,
          location: rawPayload.gps
        },
        lastUpdated: event.timestamp
      },
      evidenceGraph: evidenceIds
    };
  }
}
