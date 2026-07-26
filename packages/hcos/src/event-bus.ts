export type HcoseventType = 
  | 'SignalDetected'
  | 'ObservationCreated'
  | 'EvidenceVerified'
  | 'InstrumentStateChanged'
  | 'PackLoaded'
  | 'CalibrationFailed'
  | 'FederationNegotiated';

export interface HcosEvent<T = any> {
  type: HcoseventType;
  timestamp: string;
  source: string;
  payload: T;
}

type EventHandler = (event: HcosEvent) => void | Promise<void>;

/**
 * The central nervous system of HCOS. 
 * Controllers subscribe to specific events and react asynchronously.
 */
export class EventBus {
  private static instance: EventBus;
  private listeners: Map<HcoseventType, EventHandler[]> = new Map();

  private constructor() {}

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  public subscribe(eventType: HcoseventType, handler: EventHandler): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, []);
    }
    this.listeners.get(eventType)!.push(handler);
  }

  public publish(event: HcosEvent): void {
    console.log(`[EventBus] 📢 Emitting ${event.type} from ${event.source}`);
    const handlers = this.listeners.get(event.type) || [];
    // Fire and forget (asynchronous propagation)
    handlers.forEach(handler => {
      Promise.resolve(handler(event)).catch(err => {
        console.error(`[EventBus] Error handling event ${event.type}:`, err);
      });
    });
  }
}

export const eventBus = EventBus.getInstance();
