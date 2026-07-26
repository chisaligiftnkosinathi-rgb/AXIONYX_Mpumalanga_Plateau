import { EvidenceArtifact, Feedback } from '../schemas/education.schema';

/**
 * ScieEngine Capability (Educational Reflector & Researcher)
 * AI that teaches scientific thinking by demanding evidence,
 * rather than generating answers.
 */
export class ScieEngineCapability {
  
  /**
   * Audits a submitted experimental evidence artifact.
   * If the reasoning is flawed or lacks control, it prompts the student
   * for falsification or better control, rather than just grading it.
   */
  public auditEvidence(evidence: EvidenceArtifact): Feedback {
    
    // Simulate an AI evaluating the scientific rigor of the submission
    const lacksControl = evidence.data && evidence.data.includes('no control group');
    const conclusionJumps = evidence.data && evidence.data.includes('iron rusted fast so it must be oxygen');
    
    let reasoning = "Your observation log is detailed and correctly formatted.";
    let falsificationPrompt = "How could you design a follow-up experiment to prove that temperature, not just exposure to air, affects the rate?";
    
    if (lacksControl) {
      reasoning = "Your experiment measured the reaction, but you have no baseline to compare it against.";
      falsificationPrompt = "What would happen if you ran the exact same test in a vacuum or with inert gas? How would that change your conclusion?";
    } else if (conclusionJumps) {
      reasoning = "Your conclusion jumps ahead of your measurements. You measured rust speed, but you did not isolate oxygen as the sole variable.";
      falsificationPrompt = "How could you falsify your hypothesis that oxygen is the *only* cause of the rust?";
    }

    return {
      id: `fb-${Date.now()}`,
      evidenceId: evidence.id,
      provider: 'SCIE_ENGINE',
      reasoning,
      falsificationPrompt,
      timestamp: new Date().toISOString()
    };
  }
}
