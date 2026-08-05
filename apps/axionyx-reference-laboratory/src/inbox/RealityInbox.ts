import { IEventBus } from '@axionyx/event-bus';
import * as crypto from 'crypto';

export class RealityInbox {
  constructor(private eventBus: IEventBus) {
    // Listen for raw physical observations
    this.eventBus.subscribe('PhysicalObservationAcquired', async (event) => {
      this.validateAndIngest(event.payload);
    });
  }

  private validateAndIngest(observation: any): void {
    console.log(`[RealityInbox] Inspecting Observation for Sample ${observation.sampleId}`);

    // Basic data integrity checks
    if (!observation.concentration || observation.concentration < 0) {
      this.eventBus.publish({
        eventId: crypto.randomUUID(),
        eventType: 'ObservationRejected',
        aggregateId: observation.sampleId,
        payload: { reason: 'Negative or null concentration detected', observation },
        emittedAt: new Date()
      } as any);
      return;
    }

    // Convert to canonical AXIONYX Domain Event
    this.eventBus.publish({
      eventId: crypto.randomUUID(),
      eventType: 'MeasurementCaptured',
      aggregateId: observation.sampleId,
      payload: {
        instrumentId: observation.instrumentId,
        analyte: observation.analyte,
        value: observation.concentration,
        unit: observation.unit
      },
      emittedAt: new Date()
    } as any);
    
    console.log(`[RealityInbox] Observation promoted to Domain Event: MeasurementCaptured`);
  }
}
