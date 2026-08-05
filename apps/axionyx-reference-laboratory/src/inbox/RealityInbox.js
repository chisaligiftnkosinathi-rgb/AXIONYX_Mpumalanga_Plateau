import * as crypto from 'crypto';
export class RealityInbox {
    eventBus;
    constructor(eventBus) {
        this.eventBus = eventBus;
        // Listen for raw physical observations
        this.eventBus.subscribe('PhysicalObservationAcquired', async (event) => {
            this.validateAndIngest(event.payload);
        });
    }
    validateAndIngest(observation) {
        console.log(`[RealityInbox] Inspecting Observation for Sample ${observation.sampleId}`);
        // Basic data integrity checks
        if (!observation.concentration || observation.concentration < 0) {
            this.eventBus.publish({
                eventId: crypto.randomUUID(),
                eventType: 'ObservationRejected',
                aggregateId: observation.sampleId,
                payload: { reason: 'Negative or null concentration detected', observation },
                emittedAt: new Date()
            });
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
        });
        console.log(`[RealityInbox] Observation promoted to Domain Event: MeasurementCaptured`);
    }
}
