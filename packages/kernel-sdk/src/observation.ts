export interface Observation<T = unknown> {
    id: string;
    source: string;
    observedAt: string;
    payload: T;
    metadata?: Record<string, unknown>;
}
