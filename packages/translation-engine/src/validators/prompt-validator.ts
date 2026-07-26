import { Scene } from '../schema';

export class PromptValidator {
  
  /**
   * Evaluates the Scene contract before compilation.
   * Rejects any scene attempting to invent reality.
   */
  static validateScene(scene: Scene): { valid: boolean; reason?: string } {
    if (!scene.source_reality || !scene.source_reality.reality_id) {
      return { valid: false, reason: "Missing reality_id." };
    }

    if (!scene.source_reality.event_ids || scene.source_reality.event_ids.length === 0) {
      return { valid: false, reason: "Missing event_ids. Cannot substantiate claim without events." };
    }

    if (!scene.narration || scene.narration.approved !== true) {
      return { valid: false, reason: "Narration text has not been explicitly approved." };
    }

    // Heuristic checking against autonomous AI decision falsification
    const visualText = scene.visual_requirements.join(' ').toLowerCase();
    if (visualText.includes("ai approving") || visualText.includes("robot deciding")) {
      return {
        valid: false,
        reason: "Unsupported claim. Dataset indicates human-reviewed decision. Requested visual changes reality interpretation."
      };
    }

    return { valid: true };
  }
}
