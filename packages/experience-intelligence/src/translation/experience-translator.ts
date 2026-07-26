export class ExperienceTranslator {
  static translateCalibration(offset: number): string {
    return \`The sensor was adjusted by \${offset} against a known reference to improve confidence.\`;
  }
}
