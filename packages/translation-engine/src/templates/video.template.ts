import { Scene } from '../schema';
import { GeneratedPrompt, PromptTemplate } from '../compiler/prompt-compiler';

export class VideoTemplate implements PromptTemplate {
  compile(scene: Scene, facts: any): GeneratedPrompt {
    const promptText = `
ROLE:
You are a visual translator for AXIONYX.

SOURCE REALITY:
reality_id: ${scene.source_reality.reality_id}
events: ${scene.source_reality.event_ids.join(', ')}

SCENE PURPOSE:
${scene.purpose}

VISUAL REQUIREMENTS:
${scene.visual_requirements.map(v => `- ${v}`).join('\n')}

FACTUAL CONSTRAINTS:
${facts ? JSON.stringify(facts, null, 2) : 'Adhere strictly to the frozen dataset.'}

DO NOT:
- Invent measurements.
- Create autonomous AI decisions (show human-reviewed interpretation).
- Change reality interpretation.
`.trim();

    return {
      assetType: "VIDEO",
      realityReference: {
        realityId: scene.source_reality.reality_id,
        eventIds: scene.source_reality.event_ids
      },
      prompt: promptText,
      constraints: [
        "Do not invent measurements",
        "Show human-reviewed interpretation"
      ],
      forbiddenClaims: [
        "Autonomous AI decisions",
        "Falsified measurements"
      ]
    };
  }
}
