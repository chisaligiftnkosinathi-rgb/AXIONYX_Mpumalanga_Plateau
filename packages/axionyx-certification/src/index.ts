// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/axionyx-certification/src/index.ts

export type ATRL = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface TwinCertificate {
  score: number;
  readinessLevel: ATRL;
  status: 'VERIFIED' | 'DEGRADED' | 'EXPIRED';
  evidenceCount: number;
  lastValidationDate: Date;
}

export class CertificationEngine {
  /**
   * Calculates the time-decaying trust certificate of a Digital Twin.
   */
  static evaluateCertification(twinId: string, evidenceCount: number, lastValidationDate: Date): TwinCertificate {
    const daysSinceValidation = Math.floor((new Date().getTime() - lastValidationDate.getTime()) / (1000 * 3600 * 24));
    
    // Base score calculation
    let score = 96;
    
    // Certification Decay Mechanics
    if (daysSinceValidation > 30) {
      score -= (daysSinceValidation - 30) * 0.5; // Decays 0.5% per day after 30 days
    }

    let status: 'VERIFIED' | 'DEGRADED' | 'EXPIRED' = 'VERIFIED';
    if (score < 50) status = 'EXPIRED';
    else if (score < 80) status = 'DEGRADED';

    let readinessLevel: ATRL = 4;
    if (status === 'VERIFIED') readinessLevel = 5; // Autonomous Assisted

    console.log(`[Certification] Twin [${twinId}] Score: ${score.toFixed(1)}% | ATRL: ${readinessLevel} | Status: ${status}`);

    return {
      score,
      readinessLevel,
      status,
      evidenceCount,
      lastValidationDate
    };
  }
}
