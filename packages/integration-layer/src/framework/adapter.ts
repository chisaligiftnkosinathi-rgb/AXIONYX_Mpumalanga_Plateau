import { Asset, Event } from '../../../engineering-os-kernel/src/schemas/primitives.schema';

export interface EvidenceMapper {
  mapToEvidenceGraph(rawPayload: any): string[]; // Returns Evidence IDs
}

export interface Normaliser {
  normalise(rawPayload: any): Event;
}

export interface SystemAdapter {
  name: string;
  normaliser: Normaliser;
  evidenceMapper: EvidenceMapper;
  
  ingest(rawPayload: any): Partial<Asset>;
}
