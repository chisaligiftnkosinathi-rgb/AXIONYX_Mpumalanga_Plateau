import { GeneratedPrompt } from './prompt-compiler';

export interface ModelAdapter {
  generate(prompt: GeneratedPrompt): Promise<Buffer | string>;
}
