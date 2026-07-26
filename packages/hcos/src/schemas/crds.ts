/**
 * AXIONYX HCOS Custom Resource Definitions (CRDs)
 * These interfaces represent the declarative state of the platform.
 */

export interface KubernetesMeta {
  apiVersion: string; // e.g. "axionyx.io/v1"
  kind: string;       // e.g. "Instrument", "EvidencePipeline"
  metadata: {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
  };
}

export interface InstrumentCRD extends KubernetesMeta {
  kind: 'Instrument';
  spec: {
    id: string;
    profile: string; // e.g., "municipality", "laboratory"
    packs: string[]; // List of KnowledgePack names
    federation: {
      enabled: boolean;
      exports: string[];
      imports: string[];
    };
  };
  status?: {
    phase: 'CREATED' | 'INSTALLING' | 'CALIBRATING' | 'READY' | 'DEGRADED';
    healthScore: number;
    lastCalibrated: string;
  };
}

export interface EvidencePipelineCRD extends KubernetesMeta {
  kind: 'EvidencePipeline';
  spec: {
    signal: {
      detector: string;
    };
    translation: {
      parser: string;
    };
    calibration: {
      profile: string;
    };
    reasoning: {
      policy: string;
    };
    federation: {
      enabled: boolean;
    };
  };
  status?: {
    active: boolean;
    lastExecution: string;
    throughput: number;
  };
}

export interface KnowledgePackCRD extends KubernetesMeta {
  kind: 'KnowledgePack';
  spec: {
    id: string;
    version: string;
    dependencies: Array<{ name: string; version: string }>;
    source: string;
  };
  status?: {
    resolved: boolean;
  };
}
