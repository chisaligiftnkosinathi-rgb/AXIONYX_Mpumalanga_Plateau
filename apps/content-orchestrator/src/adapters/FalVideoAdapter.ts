import { IVideoProvider } from './IMediaProvider';

export class FalVideoAdapter implements IVideoProvider {
  providerName = 'fal.ai';

  async generateVideo(prompt: string, duration: number, imageReference?: string): Promise<string> {
    console.log(`[FalVideoAdapter] Authenticating with fal.ai...`);
    console.log(`[FalVideoAdapter] Dispatching Prompt: "${prompt}"`);
    console.log(`[FalVideoAdapter] Duration: ${duration}s | Initial Image: ${imageReference || 'None'}`);
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`[FalVideoAdapter] Render complete.`);
    return `https://storage.fal.ai/mock-render-${Date.now()}.mp4`;
  }
}
