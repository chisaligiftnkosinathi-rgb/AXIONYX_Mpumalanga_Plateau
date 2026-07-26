export class AudienceTranslator {
  /**
   * Translates an engineered truth into an audience-specific narrative.
   */
  static translateCalibrationEvidence(audience: 'engineer' | 'student' | 'executive', offset: number): string {
    switch (audience) {
      case 'engineer':
        return \`Sensor correction factor of \${offset} applied against ISO 17025 reference standard.\`;
      case 'student':
        return \`The sensor was checked against a known good value, so we can trust its reading.\`;
      case 'executive':
        return \`The environmental measurement is backed by verifiable compliance evidence.\`;
      default:
        return \`Calibration offset: \${offset}\`;
    }
  }
}
