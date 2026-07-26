import { EngineeringRequirement } from '../standards/standards-translator';

export class RequirementTranslator {
  static formatRequirements(requirements: EngineeringRequirement[]): string {
    return requirements.map(r => \`\${r.name}: \${r.status}\`).join('\\n');
  }
}
