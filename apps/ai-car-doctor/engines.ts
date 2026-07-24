import { Evidence } from '../../domain-intelligence/core/src';
import { EngineeringModel } from '../../domain-intelligence/core/src';

// ==========================================
// 1. Reality Acquisition Engine
// ==========================================
export class RealityAcquisitionEngine {
  public captureInputs(inputs: any[]): any[] {
    return inputs; // Collects raw data
  }
}

// ==========================================
// 2. Observation Engine
// ==========================================
export class ObservationEngine {
  public extractObservations(rawInputs: any[]): any[] {
    // Detects raw facts: "Small Scratch on Bumper"
    return rawInputs.map(input => ({
      entityId: input.targetId,
      rawCondition: input.condition
    }));
  }
}

// ==========================================
// 3. Evidence Engine
// ==========================================
export class EvidenceEngine {
  public convertToEvidence(observations: any[]): Evidence[] {
    // Translates "Small Scratch" into structured Engineering Evidence
    return observations.map((obs, idx) => {
      let energyEstimate = 'UNKNOWN';
      if (obs.rawCondition.toLowerCase().includes('scratch')) {
        energyEstimate = 'VERY_LOW';
      }

      return {
        id: `ev-${idx}`,
        source: 'EvidenceEngine',
        timestamp: new Date().toISOString(),
        subject: obs.entityId,
        observation: obs.rawCondition,
        measurement: { impactEnergy: energyEstimate },
        confidence: {
          observationConfidence: 0.95,
          evidenceQuality: 'HIGH'
        },
        provenance: ['RealityAcquisition -> ObservationEngine -> EvidenceEngine']
      };
    });
  }
}

// ==========================================
// 4 & 5. Rule Engine (Physical & Business)
// ==========================================
export class RuleEngine {
  public evaluatePhysicalRules(evidence: Evidence): any {
    if (evidence.measurement?.impactEnergy === 'VERY_LOW') {
      return {
        ruleId: 'PHYS-001',
        description: 'Low energy surface impacts cannot deform Ultra-High-Strength Steel (UHSS) structures.',
        outcome: 'DEFORMATION_IMPOSSIBLE'
      };
    }
    return null;
  }
}

// ==========================================
// 6. Reasoning Engine
// ==========================================
export class ReasoningEngine {
  constructor(private engineeringModel: EngineeringModel) {}

  public generateHypotheses(evidenceList: Evidence[], rules: any[]) {
    const hypotheses: any[] = [];
    
    evidenceList.forEach(ev => {
      const applicableRule = rules.find(r => r && r.outcome === 'DEFORMATION_IMPOSSIBLE');
      
      // Look up protected components
      const protectedRels = this.engineeringModel.relationships.filter(
        r => r.sourceId === ev.subject && r.relationshipType === 'PROTECTS'
      );

      protectedRels.forEach(rel => {
        if (applicableRule) {
          hypotheses.push({
            targetId: rel.targetId,
            status: 'UNLIKELY_DAMAGED',
            confidence: 0.992,
            reasoning: `Rule applied: ${applicableRule.description}. Evidence dictates impact energy is VERY_LOW.`
          });
        }
      });
    });

    return hypotheses;
  }
}

// ==========================================
// 7. Decision Engine
// ==========================================
export class DecisionEngine {
  public evaluateDecisions(hypotheses: any[]): any[] {
    return hypotheses.map(h => {
      if (h.status === 'UNLIKELY_DAMAGED') {
        return {
          targetId: h.targetId,
          action: 'NO_ACTION_REQUIRED',
          justification: h.reasoning
        };
      }
      return {
        targetId: h.targetId,
        action: 'INSPECT_AND_MEASURE',
        justification: h.reasoning
      };
    });
  }
}

// ==========================================
// 8. Explanation Engine
// ==========================================
export class ExplanationEngine {
  public generateReport(evidenceList: Evidence[], decisions: any[]): string {
    let report = "==============================================\n";
    report += "📋 ENGINEERING EXPLANATION REPORT\n";
    report += "==============================================\n\n";

    evidenceList.forEach(ev => {
      report += `[EVIDENCE] ${ev.subject}\n`;
      report += `  -> Observation : ${ev.observation}\n`;
      report += `  -> Confidence  : ${ev.confidence.observationConfidence * 100}%\n`;
      report += `  -> Measurement : Impact Energy = ${ev.measurement?.impactEnergy}\n\n`;
    });

    decisions.forEach(dec => {
      report += `[DECISION] Target: ${dec.targetId}\n`;
      report += `  -> Required Action : ${dec.action}\n`;
      report += `  -> Engineering Rule: ${dec.justification}\n\n`;
    });

    return report;
  }
}
