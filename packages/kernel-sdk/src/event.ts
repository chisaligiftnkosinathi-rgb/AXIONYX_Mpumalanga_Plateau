export interface CanonicalEvent<T = unknown> {
    eventId: string;
    observationId: string;
    domain: string;
    capability: string;
    eventType: string;
    occurredAt: string;
    actor?: string;
    payload: T;
    metadata?: Record<string, unknown>;
}
