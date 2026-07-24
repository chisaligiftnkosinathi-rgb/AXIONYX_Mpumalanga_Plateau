import { IEventStore, DomainEvent } from '../engine/IEventStore';

export class JsonEventStoreAdapter implements IEventStore {
  private events: DomainEvent[] = [];

  constructor(initialEvents: DomainEvent[] = []) {
    this.events = initialEvents.sort((a, b) => 
      new Date(a.occurredAt).getTime() - new Date(b.occurredAt).getTime()
    );
  }

  async append(event: DomainEvent): Promise<void> {
    this.events.push(event);
  }

  async readStream(aggregateId: string): Promise<DomainEvent[]> {
    return this.events.filter(e => e.aggregateId === aggregateId);
  }

  async replayUpTo(timestamp: string): Promise<DomainEvent[]> {
    const targetTime = new Date(timestamp).getTime();
    return this.events.filter(e => new Date(e.occurredAt).getTime() <= targetTime);
  }
}
