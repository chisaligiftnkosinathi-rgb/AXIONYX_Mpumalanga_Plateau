import { ObservationEvent } from './observation';

export interface ObservationAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  fetchRecent(): Promise<ObservationEvent[]>;
}

// Example Adapter Interface implementation
export class LIMSAdapter implements ObservationAdapter {
  public async connect(): Promise<void> {
    console.log('[LIMS Adapter] Connected to Laboratory Information Management System');
  }

  public async disconnect(): Promise<void> {
    console.log('[LIMS Adapter] Disconnected');
  }

  public async fetchRecent(): Promise<ObservationEvent[]> {
    const timestamp = new Date().toISOString();
    return [
      {
        metadata: { eventType: 'LIMS_RESULT', adapterId: 'lims-prod-1', version: '1.0' },
        payload: {
          id: 'obs-lims-' + Date.now(),
          occurredAt: timestamp,
          receivedAt: timestamp,
          source: 'LIMS-Carolina-Lab',
          asset: 'CoalBatch-9921',
          measurement: 'Ash Content',
          value: 14.2,
          unit: '%',
          confidence: 0, // Pending OVL validation
          provenance: 'lab-technician-input',
          checksum: 'hash9921'
        },
        provenance: { origin: 'LIMS', chainHashes: [] },
        evidenceStatus: 'PENDING_OVL'
      }
    ];
  }
}
