import { DomainEvent } from '@axionyx/event-bus';

export interface WorkflowState {
  state: string;
  context: Record<string, any>;
}

export interface IWorkflowEngine {
  start(instanceId: string, workflowName: string): Promise<WorkflowState>;
  transition(instanceId: string, event: DomainEvent): Promise<WorkflowState>;
  current(instanceId: string): Promise<WorkflowState>;
  history(instanceId: string): Promise<any[]>;
}

export * from './adapters/XStateAdapter';
export * from './definitions/LaboratoryLifecycle';
