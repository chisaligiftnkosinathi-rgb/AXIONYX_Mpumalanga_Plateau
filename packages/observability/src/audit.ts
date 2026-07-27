import crypto from 'crypto';

export class Audit {
  public static generateScientificFingerprint(data: any): string {
    // Canonical JSON stringify (sorting keys) would be used here in production
    // For simplicity we just stringify the provided object and hash it
    const canonicalString = JSON.stringify(data, Object.keys(data).sort());
    return crypto.createHash('sha256').update(canonicalString).digest('hex');
  }
}
