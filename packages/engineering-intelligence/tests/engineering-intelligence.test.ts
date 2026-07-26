import { ProgressEngine } from '../src/intelligence/progress-engine';
import { RiskEngine } from '../src/intelligence/risk-engine';
import { DecisionLog } from '../src/governance/decision-log';
import { EngineeringReality } from '../src/schemas/engineering-event.schema';

describe('AXIONYX Engineering Intelligence Validation', () => {
  it('deterministically calculates progress and extracts learning events without hallucination', () => {
    const reality: EngineeringReality = {
      reality_id: "TEST-001",
      project: { name: "Test", type: "software", status: "WIP" },
      intent: { goal: "test" },
      requirements: [
        { id: "R1", description: "req1", status: "implemented" },
        { id: "R2", description: "req2", status: "pending" }
      ],
      events: [
        { id: "E1", type: "learning_event", observation: "Assumption changed", impact: "Updated spec", evidence: ["test_evidence"] },
        { id: "E2", type: "implementation_completed", evidence: ["commit_x"] }
      ],
      risks: [
        { id: "RSK1", description: "Deployment readiness incomplete", status: "open", evidence: [] }
      ]
    };

    const progress = ProgressEngine.evaluateProgress(reality);
    expect(progress.completed_requirements).toBe(1);
    expect(progress.percentage).toBe(50);
    expect(progress.confidence).toBe('VERIFIED');

    const learnings = DecisionLog.extractLearnings(reality.events);
    expect(learnings.length).toBe(1);
    expect(learnings[0].observation).toBe("Assumption changed");

    const risks = RiskEngine.evaluateRisks(reality);
    expect(risks[0].recommended_action).toContain("rollback test");
  });
});
