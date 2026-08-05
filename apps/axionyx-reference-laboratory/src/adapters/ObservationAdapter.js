import { randomUUID } from 'crypto';
export class ObservationAdapter {
    translate(observation) {
        return {
            eventId: randomUUID(),
            observationId: observation.id,
            domain: 'laboratory',
            capability: 'Measure Concentration',
            eventType: 'ObservationReceived',
            occurredAt: new Date().toISOString(),
            actor: observation.payload.operator,
            payload: observation.payload,
            metadata: {
                ...observation.metadata,
                instrument: observation.payload.instrument,
            },
        };
    }
}
