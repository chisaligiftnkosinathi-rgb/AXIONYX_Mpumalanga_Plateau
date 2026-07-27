import { ObservationEvent } from './observation';

export interface EventBus {
  publish(topic: string, event: ObservationEvent): Promise<void>;
  subscribe(topic: string, handler: (event: ObservationEvent) => void): string;
  unsubscribe(subscriptionId: string): void;
}

export class InMemoryEventBus implements EventBus {
  private listeners: Map<string, Array<{ id: string, handler: (e: ObservationEvent) => void }>> = new Map();

  public async publish(topic: string, event: ObservationEvent): Promise<void> {
    const topicListeners = this.listeners.get(topic) || [];
    // Ensure immutability via deep freeze (simplified here)
    Object.freeze(event);
    topicListeners.forEach(l => l.handler(event));
  }

  public subscribe(topic: string, handler: (event: ObservationEvent) => void): string {
    const id = Math.random().toString(36).substring(7);
    if (!this.listeners.has(topic)) {
      this.listeners.set(topic, []);
    }
    this.listeners.get(topic)!.push({ id, handler });
    return id;
  }

  public unsubscribe(subscriptionId: string): void {
    for (const [topic, topicListeners] of this.listeners.entries()) {
      this.listeners.set(topic, topicListeners.filter(l => l.id !== subscriptionId));
    }
  }
}
