import { ActionCandidate } from './action-selector';

export enum ExecutionMode {
  RECOMMENDATION = 'RECOMMENDATION',
  SIMULATION = 'SIMULATION',
  OBSERVED = 'OBSERVED'
}

export interface ExecutionResult {
  mode: ExecutionMode;
  predictedOutcome?: Record<string, number>;
  actualOutcome?: Record<string, number>;
  timestamp: string;
}

export interface ExecutionAdapter {
  recommend(action: ActionCandidate): ExecutionResult;
  simulate(action: ActionCandidate): ExecutionResult;
  observe(action: ActionCandidate, physicalMetrics: Record<string, number>): ExecutionResult;
}

export class AbstractExecutionAdapter implements ExecutionAdapter {
  recommend(action: ActionCandidate): ExecutionResult {
    return {
      mode: ExecutionMode.RECOMMENDATION,
      timestamp: new Date().toISOString()
    };
  }

  simulate(action: ActionCandidate): ExecutionResult {
    return {
      mode: ExecutionMode.SIMULATION,
      predictedOutcome: { yield: 74.8, ash: 18.1 },
      timestamp: new Date().toISOString()
    };
  }

  observe(action: ActionCandidate, physicalMetrics: Record<string, number>): ExecutionResult {
    return {
      mode: ExecutionMode.OBSERVED,
      actualOutcome: physicalMetrics, // e.g. { yield: 73.9, ash: 18.5 }
      timestamp: new Date().toISOString()
    };
  }
}
