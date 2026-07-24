import { IEventBus } from '@axionyx/event-bus';
import { PolicyEngine } from '@axionyx/policy-engine/src/PolicyEngine';

export class LaboratoryWorkflow {
  constructor(private eventBus: IEventBus, private policyEngine: PolicyEngine) {
    this.eventBus.subscribe('MeasurementCaptured', this.onMeasurementCaptured.bind(this));
  }

  private onMeasurementCaptured(event: any): void {
    const { aggregateId, payload } = event;
    
    // Evaluate against ISO 17025 Policies
    const result = this.policyEngine.evaluate('iso17025.instrument.drift', {
      facts: { drift: payload.value > 10 ? 0.08 : 0.02 } // Mocking a drift calculation
    });

    if (!result.satisfied) {
      // Execute the deterministic Policy Actions
      result.actions.forEach(actionReq => {
        if (actionReq.action === 'PAUSE_WORKFLOW') {
          this.eventBus.publish({
            type: 'WorkflowPaused',
            aggregateId,
            payload: { reason: 'Policy Violation', rule: result.ruleEvaluated },
            timestamp: new Date()
          });
        }
        if (actionReq.action === 'GENERATE_EVIDENCE') {
          this.eventBus.publish({
            type: 'EvidenceGenerated',
            aggregateId,
            payload: actionReq.payload,
            timestamp: new Date()
          });
        }
      });
    } else {
      // Approve and Archive
      this.eventBus.publish({
        type: 'SampleApproved',
        aggregateId,
        payload: { status: 'APPROVED', measurement: payload.value },
        timestamp: new Date()
      });
    }
  }
}
