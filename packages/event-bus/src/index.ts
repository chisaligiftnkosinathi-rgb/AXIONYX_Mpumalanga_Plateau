export interface DomainEvent<T = any> {
  eventId: string;
  aggregateId: string;
  eventType: string;
  payload: T;
  emittedAt: Date;
}

export type EventHandler<T = any> = (event: DomainEvent<T>) => Promise<void>;

export interface IEventBus {
  publish(event: DomainEvent): Promise<void>;
  subscribe<T>(eventType: string, handler: EventHandler<T>): void;
}

export * from './providers/InMemoryEventBus';
export * from './providers/MqttEventBus';
