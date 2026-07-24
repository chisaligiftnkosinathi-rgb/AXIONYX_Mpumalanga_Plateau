import { IEventBus } from '@axionyx/event-bus';

export class RealityInbox {
  constructor(private eventBus: IEventBus) {
    // Listen for raw physical observations
    this.eventBus.subscribe('PhysicalObservationAcquired', (event) => {
      this.validateAndIngest(event.payload);
    });
  }

  private validateAndIngest(observation: any): void {
    console.log(`[RealityInbox] Inspecting Observation for Sample ${observation.sampleId}`);

    // Basic data integrity checks
    if (!observation.concentration || observation.concentration < 0) {
      this.eventBus.publish({
        type: 'ObservationRejected',
        aggregateId: observation.sampleId,
        payload: { reason: 'Negative or null concentration detected', observation },
        timestamp: new Date()
      });
      return;
    }

    // Convert to canonical AXIONYX Domain Event
    this.eventBus.publish({
      type: 'MeasurementCaptured',
      aggregateId: observation.sampleId,
      payload: {
        instrumentId: observation.instrumentId,
        analyte: observation.analyte,
        value: observation.concentration,
        unit: observation.unit
      },
      timestamp: new Date()
    });
    
    console.log(`[RealityInbox] Observation promoted to Domain Event: MeasurementCaptured`);
  }
}
