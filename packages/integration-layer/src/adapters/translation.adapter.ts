import { Observation, Claim, Evidence } from '../../../engineering-os-kernel/src/schemas/primitives.schema';

export interface TranslationBundle {
  observations: Observation[];
  claims: Claim[];
  evidence: Evidence[];
}

export interface TranslationAdapter {
  sourceType: string;
  translate(input: any): TranslationBundle;
}
