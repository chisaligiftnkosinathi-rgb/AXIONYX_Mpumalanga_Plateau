import { IEventStore } from './IEventStore';
import { DomainEvent } from '@axionyx/event-bus';

export class InMemoryEventStore implements IEventStore {
  private events: DomainEvent[] = [];

  async append(event: DomainEvent): Promise<void> {
    this.events.push(event);
  }

  async getEventsForAggregate(aggregateId: string): Promise<DomainEvent[]> {
    return this.events.filter(e => e.aggregateId === aggregateId);
  }

  async replayAll(handler: (event: DomainEvent) => Promise<void>): Promise<void> {
    for (const event of this.events) {
      await handler(event);
    }
  }
}
