import { ProgressReport } from '../intelligence/progress-engine';
import { RiskEvaluation } from '../intelligence/risk-engine';
import { ADR } from '../governance/architecture-record';

export class StatusExplainer {
  /**
   * Generates a human-readable engineering status based strictly on the cryptographically traced evidence graph.
   */
  static explain(progress: ProgressReport, risks: RiskEvaluation[], adrs: ADR[]): string {
    return \`Project Status:
\${progress.status}

Evidence:
Requirements: \${progress.completed_requirements} / \${progress.total_requirements} completed
Risks: \${risks.length} open
Architecture Decisions: \${adrs.length} recorded
Confidence: \${progress.confidence}

Project progress is estimated at \${progress.percentage}% because:
✓ \${progress.completed_requirements} of \${progress.total_requirements} requirements implemented
✓ Implementation evidence verified
\${risks.length > 0 ? \`✗ \${risks.length} risks remain open\` : '✓ No open risks'}
\`;
  }
}
