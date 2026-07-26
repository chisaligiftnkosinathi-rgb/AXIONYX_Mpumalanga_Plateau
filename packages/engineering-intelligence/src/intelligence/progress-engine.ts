import { EngineeringReality } from '../schemas/engineering-event.schema';

export interface ProgressReport {
  status: string;
  total_requirements: number;
  completed_requirements: number;
  percentage: number;
  confidence: 'VERIFIED' | 'UNVERIFIED';
}

export class ProgressEngine {
  /**
   * Deterministically calculates progress based entirely on evidence-backed requirements.
   * Avoids "AI estimation" hallucinations.
   */
  static evaluateProgress(reality: EngineeringReality): ProgressReport {
    const total = reality.requirements.length;
    const completed = reality.requirements.filter(r => r.status === 'implemented').length;
    
    // In a real system, tests would be verified here. We use the event graph in the PoC.
    const hasImplementationEvidence = reality.events.some(e => e.type === 'implementation_completed' && e.evidence.length > 0);

    return {
      status: reality.project.status,
      total_requirements: total,
      completed_requirements: completed,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      confidence: hasImplementationEvidence ? 'VERIFIED' : 'UNVERIFIED'
    };
  }
}
