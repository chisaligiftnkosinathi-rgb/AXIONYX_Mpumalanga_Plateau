export type NCState = 
  | 'DETECTED'
  | 'INVESTIGATION_ACTIVE'
  | 'ROOT_CAUSE_CONFIRMED'
  | 'CAPA_DESIGNED'
  | 'CAPA_IMPLEMENTATION'
  | 'EVIDENCE_REVIEW'
  | 'CAPABILITY_IMPROVED'
  | 'MONITORING'
  | 'CLOSED';

export interface NonConformanceRecord {
  ncId: string;
  title: string;
  origin: string;
  domain: string;
  severity: 'Minor' | 'Major' | 'Critical' | 'Strategic';
  currentState: NCState;
}

export class NonConformanceEngine {
  
  /**
   * Transitions an NC to the next state, ensuring proper governance logic.
   * Evidence cannot bypass independent confidence checks.
   */
  public transitionState(currentRecord: NonConformanceRecord, action: string): NonConformanceRecord {
    let nextState = currentRecord.currentState;

    switch (currentRecord.currentState) {
      case 'DETECTED':
        if (action === 'START_INVESTIGATION') nextState = 'INVESTIGATION_ACTIVE';
        break;
      case 'INVESTIGATION_ACTIVE':
        if (action === 'CONFIRM_ROOT_CAUSE') nextState = 'ROOT_CAUSE_CONFIRMED';
        break;
      case 'ROOT_CAUSE_CONFIRMED':
        if (action === 'DESIGN_CAPA') nextState = 'CAPA_DESIGNED';
        break;
      case 'CAPA_DESIGNED':
        if (action === 'START_IMPLEMENTATION') nextState = 'CAPA_IMPLEMENTATION';
        break;
      case 'CAPA_IMPLEMENTATION':
        if (action === 'SUBMIT_EVIDENCE') nextState = 'EVIDENCE_REVIEW';
        break;
      case 'EVIDENCE_REVIEW':
        // Requires human/independent confidence check
        if (action === 'VALIDATE_EVIDENCE') nextState = 'CAPABILITY_IMPROVED';
        if (action === 'REJECT_EVIDENCE') nextState = 'CAPA_IMPLEMENTATION';
        break;
      case 'CAPABILITY_IMPROVED':
        // Fires CAPABILITY_UPGRADE_EVENT to Walala Wasala recalculation engine
        if (action === 'BEGIN_MONITORING') nextState = 'MONITORING';
        break;
      case 'MONITORING':
        // Load testing period
        if (action === 'CLOSE_NC') nextState = 'CLOSED';
        break;
    }

    return { ...currentRecord, currentState: nextState };
  }
}
