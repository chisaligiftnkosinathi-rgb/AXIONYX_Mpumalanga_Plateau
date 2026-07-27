import { ActionCandidate } from './action-selector';

export enum ApprovalAuthority {
  HUMAN_OPERATOR = 'HUMAN_OPERATOR',
  LAB_SUPERVISOR = 'LAB_SUPERVISOR',
  PLANT_MANAGER = 'PLANT_MANAGER',
  AUTOMATED_CONTROLLER = 'AUTOMATED_CONTROLLER'
}

export class ApprovalLayer {
  public requestAuthorization(action: ActionCandidate, requiredAuthority: ApprovalAuthority): boolean {
    console.log(`[Approval Layer] Requesting authorization for action: ${action.id} from ${requiredAuthority}`);
    // Simulated human/supervisor approval
    return true; 
  }
}
