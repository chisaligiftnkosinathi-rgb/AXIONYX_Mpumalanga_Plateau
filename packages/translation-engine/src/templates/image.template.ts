import { Scene } from '../schema';
import { GeneratedPrompt, PromptTemplate } from '../compiler/prompt-compiler';

export class ImageTemplate implements PromptTemplate {
  compile(scene: Scene, facts: any): GeneratedPrompt {
    const promptText = `
Create a scientific visualization.

Represent:
${scene.visual_requirements.join(', ')}

Maintain:
AXIONYX Brand Rules (Precision, Evidence, Technical Truth)

Do not add:
Unsupported entities or measurements not found in the frozen dataset.
`.trim();

    return {
      assetType: "IMAGE",
      realityReference: {
        realityId: scene.source_reality.reality_id,
        eventIds: scene.source_reality.event_ids
      },
      prompt: promptText,
      constraints: ["Maintain AXIONYX brand rules"],
      forbiddenClaims: ["Unsupported entities", "Extraneous data"]
    };
  }
}
