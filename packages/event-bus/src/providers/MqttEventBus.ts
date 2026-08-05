import { IEventBus, DomainEvent, EventHandler } from '../index';
import { MqttClient } from 'mqtt';

export class MqttEventBus implements IEventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  constructor(private readonly client: MqttClient) {
    this.client.on('message', async (topic, payload) => {
      try {
        const event: DomainEvent = JSON.parse(payload.toString());
        const eventHandlers = this.handlers.get(event.eventType) || [];
        for (const handler of eventHandlers) {
          await handler(event);
        }
      } catch (error) {
        console.error(`[MqttEventBus] Failed to process message on topic ${topic}:`, error);
      }
    });
  }

  public async publish(event: DomainEvent): Promise<void> {
    return new Promise((resolve, reject) => {
      const topic = `axionyx/events/${event.eventType}`;
      this.client.publish(topic, JSON.stringify(event), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  public subscribe<T>(eventType: string, handler: EventHandler<T>): void {
    const topic = `axionyx/events/${eventType}`;
    
    // If this is the first handler for this event type, subscribe to the topic
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
      this.client.subscribe(topic, (err) => {
        if (err) {
          console.error(`[MqttEventBus] Failed to subscribe to ${topic}:`, err);
        }
      });
    }

    this.handlers.get(eventType)!.push(handler as EventHandler<any>);
  }
}
