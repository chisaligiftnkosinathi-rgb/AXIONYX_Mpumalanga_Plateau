import { InstrumentProfile, Capability } from '../schemas/federation.schema';

export interface NegotiationResult {
  accepted: boolean;
  reason?: string;
  agreedCapabilities: string[]; // List of domains agreed upon
}

export class NegotiationEngine {
  
  constructor(private localProfile: InstrumentProfile) {}

  /**
   * Performs the Digital Diplomacy handshake before accepting evidence.
   * Compares the remote instrument's profile against the local instrument's requirements.
   */
  public negotiate(remoteProfile: InstrumentProfile): NegotiationResult {
    // 1. Identity Check
    if (!remoteProfile.id) {
      return { accepted: false, reason: 'Remote instrument missing identity.', agreedCapabilities: [] };
    }

    // 2. Health & Calibration Verification
    if (!remoteProfile.health.readyForExecution) {
      return { accepted: false, reason: 'Remote instrument is out of calibration.', agreedCapabilities: [] };
    }
    if (remoteProfile.health.health < 0.9) {
      return { accepted: false, reason: `Remote instrument health too low (${remoteProfile.health.health}).`, agreedCapabilities: [] };
    }

    // 3. Schema Negotiation
    if (remoteProfile.schemaVersion !== this.localProfile.schemaVersion) {
      return { accepted: false, reason: `Schema mismatch. Local: ${this.localProfile.schemaVersion}, Remote: ${remoteProfile.schemaVersion}`, agreedCapabilities: [] };
    }

    // 4. Capability Negotiation (What do they export that I import?)
    const agreedCapabilities: string[] = [];
    for (const [domain, requiredCap] of Object.entries(this.localProfile.capabilities.imports)) {
      const offeredCap = remoteProfile.capabilities.exports[domain];
      if (offeredCap) {
        // Version check (simplified: exact match for now)
        if (offeredCap.version === requiredCap.version) {
          agreedCapabilities.push(domain);
        } else {
          console.warn(`[Negotiation] Version mismatch for domain '${domain}'. Required: ${requiredCap.version}, Offered: ${offeredCap.version}`);
        }
      }
    }

    if (agreedCapabilities.length === 0) {
      return { accepted: false, reason: 'No overlapping capabilities found to exchange.', agreedCapabilities: [] };
    }

    // 5. Trust (Simplified simulation)
    // Here we'd verify the authority signatures.

    return {
      accepted: true,
      agreedCapabilities
    };
  }
}
