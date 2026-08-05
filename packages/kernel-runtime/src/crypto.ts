import { createHash } from 'crypto';

export function hashEvidencePayload(payload: any): string {
    const stringified = JSON.stringify(payload, Object.keys(payload).sort());
    return createHash('sha256').update(stringified).digest('hex');
}
