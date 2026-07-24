import { DomainEvent } from '@axionyx/event-bus';

export interface IEventStore {
  /**
   * Appends a new domain event to the immutable ledger.
   */
  append(event: DomainEvent): Promise<void>;
  
  /**
   * Retrieves all events for a specific aggregate, in chronological order.
   */
  getEventsForAggregate(aggregateId: string): Promise<DomainEvent[]>;
  
  /**
   * Streams all events in the system in chronological order.
   * Used for deterministic replay and projection rebuilding.
   */
  replayAll(handler: (event: DomainEvent) => Promise<void>): Promise<void>;
}
