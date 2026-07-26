import { VerificationState } from '../schemas/verification.schema';

export class ComplianceChecker {
  /**
   * Ensures the system does not hallucinate certification.
   */
  static generateComplianceReport(standard: string, states: VerificationState[]): string {
    const allSupported = states.every(s => s.verification_state === 'SUPPORTED');
    
    let report = \`Evaluating compliance for \${standard}\\n\\n\`;
    states.forEach(s => {
      report += \`Requirement: \${s.requirement}\\nEvidence Found: \${s.evidence_found}\\nStatus: \${s.verification_state}\\n\\n\`;
    });

    if (allSupported) {
      report += \`CONCLUSION: The design has been evaluated against the defined \${standard} requirements and the corresponding verification evidence exists. (Note: Designed for compliance ≠ Certified compliance).\`;
    } else {
      report += \`CONCLUSION: The design CANNOT be verified against \${standard} due to missing evidence.\`;
    }

    return report;
  }
}
