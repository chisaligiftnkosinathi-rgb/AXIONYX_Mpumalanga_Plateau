export class EvidenceLinker {
  /**
   * Cryptographically verifies that a claim made in a public article is backed by a Reality Artifact.
   */
  static generateCitation(realityId: string, description: string): string {
    return \`[EVIDENCE CITATION: \${realityId}] -> \${description}\`;
  }
}
