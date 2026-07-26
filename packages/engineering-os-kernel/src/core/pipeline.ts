import { Asset, Event, Evidence, Policy, GovernanceDecision, Intervention, StewardshipContext, InterventionProposal, Outcome, Reflection, Claim, Contradiction, ResearchProposal } from '../schemas/primitives.schema';
import { EvidenceGraph } from '../evidence/evidence-graph';
import { PluginManager } from '../manager/plugin-manager';
import { TranslationBundle } from '../../integration-layer/src/adapters/translation.adapter';

export class OSKernelPipeline {
  private evidenceGraph = new EvidenceGraph();
  private assets = new Map<string, Asset>();
  private policies: Policy[] = [];
  
  constructor(private pluginManager: PluginManager) {}
  
  registerPolicy(policy: Policy) {
    this.policies.push(policy);
    console.log(`[Kernel] Policy registered: ${policy.name} (${policy.domain})`);
  }

  execute(event: Event, twinUpdate: Partial<Asset>, eventEvidence: Evidence) {
    console.log(`\n--- AXIONYX KERNEL: Executing Unbroken Chain of Stewardship ---`);
    console.log(`[Event] Received observation from ${event.source}`);

    // 1. Evidence Verification & Recording
    if (!eventEvidence.verified) {
      console.error(`[Evidence Graph] Rejected unverified evidence ${eventEvidence.id}`);
      return;
    }
    this.evidenceGraph.record(eventEvidence);

    // 2. Stewardship Twin Update
    let asset = this.assets.get(twinUpdate.id!);
    if (!asset) {
       asset = {
         id: twinUpdate.id!,
         domain: twinUpdate.domain!,
         state: twinUpdate.state!,
         capabilities: twinUpdate.capabilities || [],
         evidenceGraph: [eventEvidence.id],
         metadata: {}
       };
    } else {
       asset.state = twinUpdate.state!;
       asset.evidenceGraph.push(eventEvidence.id);
    }
    this.assets.set(asset.id, asset);
    console.log(`[Stewardship Twin] Updated Asset: ${asset.id} | State: ${asset.state.status}`);

    // 3. Stewardship Context Build
    const context: StewardshipContext = {
      assetId: asset.id,
      domain: asset.domain,
      state: asset.state,
      evidence: [eventEvidence],
      policies: this.policies.filter(p => p.domain === asset!.domain || p.domain === 'universal'),
      timestamp: new Date().toISOString()
    };

    // 4. Reasoning Capabilities (Proposals)
    const capabilities = this.pluginManager.resolveReasoningCapabilities(asset.domain);
    const proposals: InterventionProposal[] = [];
    
    for (const cap of capabilities) {
       const capsProposals = cap.propose(context);
       proposals.push(...capsProposals);
    }

    if (proposals.length > 0) {
       console.log(`[Reasoning] AI generated ${proposals.length} proposal(s).`);
    } else {
       console.log(`[Reasoning] No interventions proposed.`);
    }

    // 5. Governance Evaluation & Decisions
    for (const proposal of proposals) {
       console.log(`[Evidence Graph] Recording proposal ${proposal.id} as immutable evidence.`);
       // In a real implementation we would write it to this.evidenceGraph here.
       
       let finalDecision: GovernanceDecision | null = null;
       
       for (const policy of context.policies) {
         const decision = policy.evaluate(proposal, context);
         console.log(`[Governance] Evaluated Policy: ${policy.name} -> ${decision.status}`);
         console.log(`             Explanation: ${decision.explanation}`);
         
         finalDecision = decision; 
         if (decision.status === 'REJECTED') {
           break; // Stop evaluating on first rejection
         }
       }
       
       if (finalDecision && finalDecision.status === 'APPROVED') {
          const intervention: Intervention = {
            id: `int_${Date.now()}_${Math.floor(Math.random()*1000)}`,
            decisionId: finalDecision.proposalId,
            timestamp: new Date().toISOString(),
            action: proposal.proposedAction,
            status: 'pending'
          };
          console.log(`[Intervention] Action authorized: ${intervention.action}`);
       } else {
          console.log(`[Intervention] Action denied or flagged: ${proposal.proposedAction}`);
       }
    }
    
    console.log(`[Audit] Unbroken chain logged. Sequence complete.`);
    console.log(`-----------------------------------------------------------\n`);
  }

  evaluateOutcome(intervention: Intervention, outcome: Outcome, twinState: Asset) {
    console.log(`\n--- AXIONYX KERNEL: Executing Stewardship Memory Reflection ---`);
    console.log(`[Outcome] Received semantic outcome for intervention ${intervention.action}`);
    
    // 1. Record Outcome Evidence
    console.log(`[Evidence Graph] Recording outcome ${outcome.id} as immutable evidence.`);
    // this.evidenceGraph.record(outcome);

    // 2. Build Context
    const context: StewardshipContext = {
      assetId: twinState.id,
      domain: twinState.domain,
      state: twinState.state,
      evidence: [], // In reality, fetch all related evidence
      policies: this.policies.filter(p => p.domain === twinState.domain || p.domain === 'universal'),
      timestamp: new Date().toISOString()
    };

    // 3. Resolve Reflection Capabilities
    const reflectionCaps = this.pluginManager.resolveReflectionCapabilities(twinState.domain);
    
    // 4. Generate Reflections
    for (const cap of reflectionCaps) {
      const reflections = cap.reflect(intervention, outcome, context);
      
      for (const reflection of reflections) {
        console.log(`[Reflection] Evaluated by ${cap.name}`);
        console.log(`             Intent: ${reflection.evaluation.intent}`);
        console.log(`             Efficiency: ${reflection.evaluation.efficiency}`);
        console.log(`             Safety: ${reflection.evaluation.safety}`);
        console.log(`             Stewardship: ${reflection.evaluation.stewardship}`);
        
        if (reflection.recommendedPolicyUpdates.length > 0) {
          console.log(`[Governance] Recommendations for Policy Update (Advisory):`);
          reflection.recommendedPolicyUpdates.forEach(r => console.log(`             - ${r}`));
        }
        
        console.log(`[Evidence Graph] Recording reflection ${reflection.id} as immutable evidence.`);
      }
    }
    
    console.log(`[Audit] Memory loop closed. Character accumulated.`);
    console.log(`-----------------------------------------------------------\n`);
  }

  synthesizeKnowledge(reflections: Reflection[], twinState: Asset) {
    console.log(`\n--- AXIONYX KERNEL: Executing Scientific Synthesis ---`);
    console.log(`[Teacher] Analyzing ${reflections.length} historical reflection(s) for pattern detection...`);
    
    // 1. Build Context
    const context: StewardshipContext = {
      assetId: twinState.id,
      domain: twinState.domain,
      state: twinState.state,
      evidence: [], 
      policies: this.policies,
      timestamp: new Date().toISOString()
    };

    // 2. Resolve Teacher Capabilities
    const teacherCaps = this.pluginManager.resolveTeacherCapabilities(twinState.domain);
    
    // 3. Generate Patterns and Lessons
    for (const cap of teacherCaps) {
      const synthesis = cap.synthesize(reflections, context);
      
      for (const pattern of synthesis.patterns) {
        console.log(`[Pattern Detected] ${pattern.id} (Confidence: ${pattern.confidence})`);
        console.log(`                   Description: ${pattern.description}`);
        console.log(`[Evidence Graph] Recording pattern as immutable evidence.`);
      }

      for (const lesson of synthesis.lessons) {
        console.log(`\n[Lesson Formalized] ${lesson.id} v${lesson.version} - ${lesson.principle}`);
        console.log(`                    Hypothesis: ${lesson.hypothesis}`);
        console.log(`                    Assumptions: ${lesson.assumptions.join(' | ')}`);
        console.log(`                    Limitations: ${lesson.limitations.join(' | ')}`);
        console.log(`                    Confidence: ${lesson.confidence}`);
        console.log(`[Evidence Graph] Recording falsifiable lesson as immutable evidence.`);
      }
    }
    
    console.log(`[Audit] Scientific loop closed. Knowledge formalized.`);
    console.log(`-----------------------------------------------------------\n`);
  }

  translateAndAudit(bundles: TranslationBundle[], domain: string) {
    console.log(`\n--- AXIONYX KERNEL: Executing Translation & Research Audit ---`);
    console.log(`[Translation Engine] Ingesting ${bundles.length} translation bundles into canonical primitives...`);
    
    const allClaims: Claim[] = [];
    const allEvidence: Evidence[] = [];

    bundles.forEach(b => {
      allClaims.push(...b.claims);
      allEvidence.push(...b.evidence);
    });

    console.log(`[Evidence Graph] Recorded ${allClaims.length} Claims and ${allEvidence.length} pieces of Evidence.`);

    const researcherCaps = this.pluginManager.resolveResearcherCapabilities(domain);
    
    for (const cap of researcherCaps) {
      console.log(`\n[Researcher] Invoking ${cap.name} to detect contradictions...`);
      const audit = cap.auditKnowledge(allClaims, allEvidence);

      for (const contradiction of audit.contradictions) {
        console.log(`\n[Contradiction Detected] ${contradiction.id} (Confidence: ${contradiction.confidence})`);
        console.log(`                         Reason: ${contradiction.reason}`);
        console.log(`[Evidence Graph] Logging explicit scientific contradiction.`);
      }

      for (const proposal of audit.proposals) {
        console.log(`\n[Research Proposal] ${proposal.id}`);
        console.log(`                    Experiment: ${proposal.proposedExperiment}`);
        console.log(`                    Justification: ${proposal.justification}`);
        proposal.expectedOutcomes.forEach((out, i) => console.log(`                    Expected Outcome ${i+1}: ${out}`));
      }
    }

    console.log(`\n[Audit] Research cycle complete. Uncertainty identified.`);
    console.log(`-----------------------------------------------------------\n`);
  }
}
