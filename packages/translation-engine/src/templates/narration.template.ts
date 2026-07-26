import { Scene } from '../schema';
import { GeneratedPrompt, PromptTemplate } from '../compiler/prompt-compiler';

export class VoiceTemplate implements PromptTemplate {
  compile(scene: Scene, facts: any): GeneratedPrompt {
    const promptText = `
Narrate only the approved script:

"${scene.narration.text}"

Tone:
A founder/researcher explaining a profound discovery. Professional, precise.

Do not:
Introduce unsupported conclusions or modify the script phrasing.
`.trim();

    return {
      assetType: "AUDIO",
      realityReference: {
        realityId: scene.source_reality.reality_id,
        eventIds: scene.source_reality.event_ids
      },
      prompt: promptText,
      constraints: ["Tone: researcher explaining discovery"],
      forbiddenClaims: ["Modification of the approved script"]
    };
  }
}
