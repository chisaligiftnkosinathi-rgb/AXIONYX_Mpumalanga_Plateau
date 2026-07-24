export interface DomainEvent {
  eventId: string;
  eventType: string;
  aggregateId: string;
  aggregateType: string;
  payload: any;
  occurredAt: string;
}

export interface IEventStore {
  /**
   * Appends a new event to the immutable ledger.
   */
  append(event: DomainEvent): Promise<void>;

  /**
   * Streams events for a given aggregate.
   */
  readStream(aggregateId: string): Promise<DomainEvent[]>;

  /**
   * Replays all events up to a specific global timestamp (Crucial for Replay Center).
   */
  replayUpTo(timestamp: string): Promise<DomainEvent[]>;
}
