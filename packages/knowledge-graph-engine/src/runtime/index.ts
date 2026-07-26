import { PackRegistry } from './registry';
import { KnowledgeResolver } from './resolver';
import { KnowledgeCompiler } from './compiler';
import { KnowledgeTraversal } from './traversal';
import { KnowledgeVerification } from './verification';
import { DiscoveryEngine, MaturityAssessment } from './discovery';
import { InstrumentEngine, InstrumentHealth } from './instrument';
import { SignalEngine, RawSignal } from './signal';
import { FederationEngine } from './federation';
import { InstrumentProfile } from '../schemas/federation.schema';
import { KnowledgePack } from '../schemas/pack.schema';
import { KnowledgeGraph, KnowledgeNode } from '../schemas/engine.schema';

export interface EvidenceSpectrum {
  resolutionId?: string;
  decisions: string[];
  dimensions: Record<string, number>;
  maturity: MaturityAssessment;
  timestamp: string;
}

export class HPLCRuntime {
  public registry: PackRegistry;
  public resolver: KnowledgeResolver;
  public compiler: KnowledgeCompiler;
  
  public graph: KnowledgeGraph | null = null;
  private traversalEngine: KnowledgeTraversal | null = null;
  private verificationEngine: KnowledgeVerification | null = null;
  
  // The HPLC specific engines
  public instrumentEngine: InstrumentEngine;
  public signalEngine: SignalEngine;
  public discoveryEngine: DiscoveryEngine | null = null;
  public federationEngine: FederationEngine | null = null;
  
  public profile: InstrumentProfile | null = null;

  constructor() {
    this.registry = new PackRegistry();
    this.resolver = new KnowledgeResolver(this.registry);
    this.compiler = new KnowledgeCompiler(this.registry);
    this.instrumentEngine = new InstrumentEngine(this.registry, this.graph);
    this.signalEngine = new SignalEngine();
  }

  // --- 1. Injection & Schema ---
  setProfile(profile: InstrumentProfile): void {
    this.profile = profile;
  }
  loadPack(pack: KnowledgePack): void {
    this.resolver.loadPack(pack);
  }

  compile(): void {
    this.graph = this.compiler.compile();
    this.compiler.validate(this.graph);
    
    // Update engines with compiled graph
    this.instrumentEngine = new InstrumentEngine(this.registry, this.graph);
    this.traversalEngine = new KnowledgeTraversal(this.graph);
    this.verificationEngine = new KnowledgeVerification(this.graph);
    this.discoveryEngine = new DiscoveryEngine(this.graph);
    
    if (this.profile) {
      this.federationEngine = new FederationEngine(this.profile, this.graph);
    }
  }

  // --- 2. The HPLC Execution Pipeline ---

  /**
   * Orchestrates the entire computational pipeline from raw signal to final Evidence Spectrum.
   */
  executePipeline(signals: RawSignal[], targetEntityId: string): EvidenceSpectrum {
    this.ensureCompiled();

    // 1. Calibration (Ensures the instrument is ready before computation)
    this.instrumentEngine.assertCalibrated();

    // 2. Signal Processing (Extracts observations from noise)
    const observations = this.signalEngine.process(signals);
    
    // In a real system, these observations would be dynamically added to the execution context or graph
    // For this demonstration, we log them.
    console.log(`[HPLCRuntime] Extracted ${observations.length} Observations from ${signals.length} raw signals.`);

    // 3. Execution Column (Translation -> Reasoning -> Governance)
    // This is where GovernanceEngine, ReasoningEngine, etc., process the data.
    // (We simulate this by invoking the DiscoveryEngine for the spectrum)

    // 4. Detection (Fingerprint matching & Gap analysis)
    const maturity = this.discoveryEngine!.computeMaturityAssessment(targetEntityId);

    // 5. Output Chromatogram (Evidence Spectrum)
    return {
      timestamp: new Date().toISOString(),
      decisions: ['Executed telemetry update', 'Triggered automated compliance check'],
      dimensions: {
        'Construction Quality': 0.98,
        'Safety': 0.62,
        'Compliance': 1.0,
        'Performance': 0.81
      },
      maturity
    };
  }

  // --- Traversal Services (Legacy support) ---
  trace(nodeId: string) {
    this.ensureCompiled();
    return this.traversalEngine!.trace(nodeId);
  }

  explain(evidenceId: string, goalId: string) {
    this.ensureCompiled();
    return this.traversalEngine!.explain(evidenceId, goalId);
  }

  impact(nodeId: string) {
    this.ensureCompiled();
    return this.traversalEngine!.impact(nodeId);
  }

  // --- Verification Services (Legacy support) ---
  verifyEvidence(evidenceId: string): boolean {
    this.ensureCompiled();
    return this.verificationEngine!.verifyEvidence(evidenceId);
  }

  verifyProvenance(nodeId: string): boolean {
    this.ensureCompiled();
    return this.verificationEngine!.verifyProvenance(nodeId);
  }

  private ensureCompiled(): void {
    if (!this.graph) {
      throw new Error('Graph is not compiled. Call runtime.compile() first.');
    }
  }
}
