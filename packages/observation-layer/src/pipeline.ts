import { EventBus } from './event-bus';
import { ObservationEvent } from './observation';

export class ObservationPipeline {
  constructor(private bus: EventBus) {}

  public async routeToOVL(event: ObservationEvent): Promise<void> {
    console.log(`[Pipeline] Routing Observation ${event.payload.id} to OVL for Evidence Validation.`);
    // The OVL module would subscribe to this topic
    await this.bus.publish('ovl.validation.queue', event);
  }
}
