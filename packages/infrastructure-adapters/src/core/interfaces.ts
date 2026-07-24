// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/infrastructure-adapters/src/core/interfaces.ts

export interface IRealityBus {
  /** Ingests physical or digital telemetry into the AXIONYX Kernel */
  ingestTelemetry(topic: string, payload: any): Promise<void>;
  /** Emits an actionable mission or alert back to physical reality */
  emitAction(topic: string, payload: any): Promise<void>;
}

export interface IRealityWarehouse {
  /** Stores immutable reality graphs, trust scores, and evidence chains for analytics */
  storeEvidence(table: string, evidenceGraph: any): Promise<void>;
}

export interface ITranslationLayer {
  /** 
   * Translates an AXIONYX JSON evidence graph into human-readable explanation.
   * STRICT CONSTRAINT: The provider must mathematically bind the LLM prompt 
   * to ONLY use the provided evidence graph to prevent hallucination.
   */
  translateExplanation(evidenceGraph: any): Promise<string>;
}

export interface IIdentityGovernance {
  /** Authenticates actors and binds them to the AXIONYX RBAC Model */
  authenticateActor(credentials: any): Promise<string>;
}

export interface IDeploymentPlatform {
  /** Provisions runtime environments for the pilot packages */
  deployPackage(packageName: string, environmentConfig: any): Promise<string>;
}

export interface IRepositoryProvider {
  /** The collaborative scientific workspace for publishing ADRs and Twin Models */
  publishKnowledge(repoPath: string, content: string): Promise<void>;
}
