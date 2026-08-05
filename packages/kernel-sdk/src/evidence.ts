import { Observation } from './observation';
import { CanonicalEvent } from './event';
import { PolicyDecision } from './policy';

export interface Evidence<T = unknown> {
    evidenceId: string;
    eventId: string;
    observationId: string;
    workflowId: string;
    policyVersion: string;
    timestamp: string;
    hash: string; // SHA-256 hash of the content

    observation: Observation<T>;
    canonicalEvent: CanonicalEvent<T>;
    policyDecision: PolicyDecision;
    workflowState: string;
}
