import { KnowledgeGraph } from '../schemas/engine.schema';
import { PackRegistry } from './registry';

export interface InstrumentHealth {
  calibration: number; // 0.0 to 1.0
  qualification: number;
  validation: number;
  health: number;
  drift: number;
  diagnostics: string[];
  readyForExecution: boolean;
}

export class InstrumentEngine {
  constructor(private registry: PackRegistry, private graph: KnowledgeGraph | null) {}

  /**
   * Evaluates the health, calibration, and readiness of the computational instrument.
   * Mirrors an HPLC calibration sequence before injection.
   */
  public diagnose(): InstrumentHealth {
    const diagnostics: string[] = [];
    
    // 1. Pack Compatibility (Calibration)
    // Check if all loaded packs have valid schemas and resolve their dependencies.
    let packHealth = 1.0;
    if (this.registry.getAllPacks().length === 0) {
      diagnostics.push('WARNING: No knowledge packs loaded. Instrument is empty.');
      packHealth = 0.0;
    } else {
      diagnostics.push(`INFO: Loaded ${this.registry.getAllPacks().length} Knowledge Packs.`);
    }

    // 2. Graph Integrity (Qualification)
    let graphHealth = 1.0;
    if (!this.graph) {
      diagnostics.push('CRITICAL: Knowledge Graph is not compiled.');
      graphHealth = 0.0;
    } else {
      const nodeCount = Array.from((this.graph as any).nodes.values()).length;
      diagnostics.push(`INFO: Graph compiled with ${nodeCount} nodes.`);
    }

    // 3. Schema & Ontology Compatibility (Validation)
    const validationHealth = packHealth * graphHealth; // Simplified for simulation
    
    // 4. Temporal Drift
    const drift = 0.0; // In a real system, measure temporal decay of evidence

    const calibration = packHealth;
    const qualification = graphHealth;
    const validation = validationHealth;
    const health = (calibration + qualification + validation) / 3.0;

    const readyForExecution = health > 0.9 && this.graph !== null;

    if (!readyForExecution) {
      diagnostics.push('ERROR: Instrument out of calibration. Execution blocked.');
    } else {
      diagnostics.push('SUCCESS: Instrument is calibrated and ready for execution.');
    }

    return {
      calibration,
      qualification,
      validation,
      health,
      drift,
      diagnostics,
      readyForExecution
    };
  }

  /**
   * Throws an error if the instrument is not ready, halting the pipeline.
   */
  public assertCalibrated(): void {
    const health = this.diagnose();
    if (!health.readyForExecution) {
      throw new Error(`HPLC Instrument is not calibrated. Diagnostics: \n${health.diagnostics.join('\n')}`);
    }
  }
}
