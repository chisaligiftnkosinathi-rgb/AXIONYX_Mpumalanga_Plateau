import { IEventBus, DomainEvent } from '@axionyx/event-bus';
import { IEventStore } from '@axionyx/event-store/src/IEventStore';

export interface IProjection<T> {
  getState(): T;
  applyEvent(event: DomainEvent): void;
  reset(): void;
}

export class ProjectionEngine {
  private projections: Map<string, IProjection<any>> = new Map();

  constructor(private eventBus: IEventBus, private eventStore?: IEventStore) {
    this.eventBus.subscribe('*', (event) => {
      this.projections.forEach(projection => projection.applyEvent(event));
    });
  }

  registerProjection(name: string, projection: IProjection<any>) {
    this.projections.set(name, projection);
  }

  getProjection<T>(name: string): T {
    const proj = this.projections.get(name);
    if (!proj) {
      throw new Error(`Projection ${name} not found`);
    }
    return proj.getState() as T;
  }

  /**
   * Deterministically rebuilds all projections from the immutable event store.
   * This proves the integrity of the system and allows recovery from zero.
   */
  async rebuildAllFromHistory(): Promise<void> {
    if (!this.eventStore) {
      throw new Error("EventStore not configured for replay.");
    }
    
    // 1. Wipe all read models
    this.projections.forEach(projection => projection.reset());
    
    // 2. Replay history byte-for-byte
    await this.eventStore.replayAll(async (event) => {
      this.projections.forEach(projection => projection.applyEvent(event));
    });
    
    console.log(`[ProjectionEngine] Deterministic Replay Complete.`);
  }
}
