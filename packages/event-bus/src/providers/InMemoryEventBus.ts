import { DomainEvent, EventHandler, IEventBus } from '../index';

export class InMemoryEventBus implements IEventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  subscribe<T>(eventType: string, handler: EventHandler<T>): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler as EventHandler);
    console.log(`[EventBus] Subscribed to ${eventType}`);
  }

  async publish(event: DomainEvent): Promise<void> {
    console.log(`[EventBus] Publishing ${event.eventType} for Aggregate ${event.aggregateId}`);
    
    const eventHandlers = this.handlers.get(event.eventType) || [];
    const wildcardHandlers = this.handlers.get('*') || [];
    
    const allHandlers = [...eventHandlers, ...wildcardHandlers];

    for (const handler of allHandlers) {
      try {
        await handler(event);
      } catch (error) {
        console.error(`[EventBus] Error handling event ${event.eventType}:`, error);
      }
    }
  }
}
