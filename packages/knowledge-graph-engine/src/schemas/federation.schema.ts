import { KnowledgeNode, KnowledgeEdge } from './engine.schema';
import { InstrumentHealth } from '../runtime/instrument';

export type PacketLifecycle = 
  | 'CREATED'
  | 'SIGNED'
  | 'NEGOTIATING'
  | 'ACCEPTED'
  | 'VERIFIED'
  | 'INDEXED'
  | 'REASONED'
  | 'ARCHIVED'
  | 'REJECTED';

export interface Authority {
  authorityId: string;
  domain: string;
  steward: string;
}

export interface Capability {
  domain: string;
  version: string;
  authority: string;
}

export interface InstrumentCapabilities {
  exports: Record<string, Capability>;
  imports: Record<string, Capability>;
}

export interface InstrumentProfile {
  id: string;
  runtimeVersion: string;
  health: InstrumentHealth;
  capabilities: InstrumentCapabilities;
  schemaVersion: string;
}

export interface TrustMetadata {
  signature: string;
  certificateId: string;
  timestamp: string;
}

export interface EvidencePacket {
  header: {
    id: string;
    timestamp: string;
    schemaVersion: string;
    instrumentId: string;
  };
  status: PacketLifecycle;
  instrument: InstrumentProfile;
  trust: TrustMetadata;
  payload: {
    nodes: KnowledgeNode[];
    edges: KnowledgeEdge[];
    evidenceContext?: any;
  };
}
