import { ModelAdapter } from './model-adapter';
import { GeneratedPrompt } from './prompt-compiler';

export class ImageAdapter implements ModelAdapter {
  async generate(prompt: GeneratedPrompt): Promise<Buffer> {
    if (prompt.assetType !== 'IMAGE') throw new Error('ImageAdapter only supports IMAGE assets');
    
    // Simulate generation delay
    console.log(`[ImageAdapter] Generating image for Reality ID: ${prompt.realityReference.realityId}`);
    return Buffer.from('mock_image_bytes');
  }
}
