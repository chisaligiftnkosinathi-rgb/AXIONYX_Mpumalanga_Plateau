// Immutable Record
export interface ObservationRecord {
  readonly id: string;
  readonly occurredAt: string;
  readonly receivedAt: string;
  readonly source: string;
  readonly asset: string;
  readonly measurement: string;
  readonly value: any;
  readonly unit: string;
  readonly confidence: number;
  readonly provenance: string;
  readonly checksum: string;
  readonly parentObservation?: string;
}

// Canonical Envelope
export interface ObservationEvent {
  readonly metadata: {
    eventType: string;
    adapterId: string;
    version: string;
  };
  readonly payload: ObservationRecord;
  readonly provenance: {
    origin: string;
    chainHashes: string[];
  };
  readonly evidenceStatus: 'PENDING_OVL' | 'VALIDATED' | 'REJECTED';
}
