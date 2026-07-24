import { createActor, AnyActorRef } from 'xstate';
import { IWorkflowEngine, WorkflowState } from '../index';
import { laboratorySampleMachine } from '../definitions/LaboratoryLifecycle';
import { DomainEvent } from '@axionyx/event-bus';

export class XStateAdapter implements IWorkflowEngine {
  private instances: Map<string, AnyActorRef> = new Map();

  async start(instanceId: string, workflowName: string): Promise<WorkflowState> {
    if (workflowName !== 'LaboratorySample') {
      throw new Error(`Unknown workflow: ${workflowName}`);
    }

    const actor = createActor(laboratorySampleMachine);
    actor.start();
    this.instances.set(instanceId, actor);
    
    console.log(`[WorkflowEngine] Started ${workflowName} for instance ${instanceId}`);
    
    return this.mapState(actor.getSnapshot());
  }

  async transition(instanceId: string, event: DomainEvent): Promise<WorkflowState> {
    const actor = this.instances.get(instanceId);
    if (!actor) {
      throw new Error(`Instance ${instanceId} not running`);
    }

    console.log(`[WorkflowEngine] Transitioning instance ${instanceId} via event ${event.eventType}`);
    
    actor.send({ type: event.eventType, payload: event.payload });
    
    return this.mapState(actor.getSnapshot());
  }

  async current(instanceId: string): Promise<WorkflowState> {
    const actor = this.instances.get(instanceId);
    if (!actor) {
      throw new Error(`Instance ${instanceId} not running`);
    }
    return this.mapState(actor.getSnapshot());
  }

  async history(instanceId: string): Promise<any[]> {
    // In a real DB-backed engine, this queries the timeline events.
    return [];
  }

  private mapState(snapshot: any): WorkflowState {
    return {
      state: snapshot.value as string,
      context: snapshot.context
    };
  }
}
