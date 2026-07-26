import { Scene } from '../src/schema';
import { PromptValidator } from '../src/validators/prompt-validator';
import { VideoTemplate } from '../src/templates/video.template';

describe('AXIONYX 0.1 Golden Demo Compiler Test', () => {

  it('compiles a valid scene into a constrained GeneratedPrompt', () => {
    const validScene: Scene = {
      scene_index: 3,
      purpose: "show evidence accumulation",
      source_reality: {
        reality_id: "MP-2026-001",
        event_ids: ["sample_received", "tested"]
      },
      visual_requirements: [
        "coal laboratory",
        "instrument analysis",
        "scientist reviewing results"
      ],
      narration: {
        text: "The sample moves through preparation and analysis...",
        approved: true
      }
    };

    // 1. Validator: Claim Firewall
    const validationResult = PromptValidator.validateScene(validScene);
    expect(validationResult.valid).toBe(true);

    // 2. Compilation
    const template = new VideoTemplate();
    const prompt = template.compile(validScene, {
      measurements: { ash: 12.4, moisture: 3.1, sulphur: 0.8 }
    });

    // 3. Assertions
    expect(prompt.assetType).toBe("VIDEO");
    expect(prompt.realityReference.realityId).toBe("MP-2026-001");
    expect(prompt.prompt).toContain("SOURCE REALITY:\nreality_id: MP-2026-001");
    expect(prompt.constraints).toContain("Do not invent measurements");
  });

  it('rejects scenes trying to invent autonomous AI decisions', () => {
    const invalidScene: Scene = {
      scene_index: 5,
      purpose: "show decision",
      source_reality: {
        reality_id: "MP-2026-001",
        event_ids: ["decision_rendered"]
      },
      visual_requirements: [
        "ai approving coal shipment automatically"
      ],
      narration: {
        text: "The AI decides it is good.",
        approved: true
      }
    };

    const validationResult = PromptValidator.validateScene(invalidScene);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.reason).toContain("Dataset indicates human-reviewed decision.");
  });

});
