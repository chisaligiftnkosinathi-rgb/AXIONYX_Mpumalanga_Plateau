import { ModelAdapter } from './model-adapter';
import { GeneratedPrompt } from './prompt-compiler';

export class VoiceAdapter implements ModelAdapter {
  async generate(prompt: GeneratedPrompt): Promise<Buffer> {
    if (prompt.assetType !== 'AUDIO') throw new Error('VoiceAdapter only supports AUDIO assets');
    
    // Simulate generation delay
    console.log(`[VoiceAdapter] Generating voiceover for Reality ID: ${prompt.realityReference.realityId}`);
    return Buffer.from('mock_audio_bytes');
  }
}
