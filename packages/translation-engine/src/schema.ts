export interface EvidenceReference {
  /** The canonical ID from the frozen dataset (e.g., MP-2026-001) */
  reality_id: string;
  /** The specific event or observation ID justifying this scene */
  event_ids: string[];
}

export interface Narration {
  /** The exact spoken text for the scene, strictly derived from the narrative contract */
  text: string;
  /** Flag indicating if the text has passed the Evidence Validator */
  approved: boolean;
}

export interface Scene {
  /** Sequential identifier for the scene within the media asset */
  scene_index: number;
  /** Cryptographic link to the frozen reality */
  source_reality: EvidenceReference;
  /** The narrative intent of the scene (e.g., 'introduce_problem', 'decision_explained') */
  purpose: string;
  /** The constrained audio prompt for the TTS generator */
  narration: Narration;
  /** The constrained prompt keywords for the video/image renderer */
  visual_requirements: string[];
}

export interface AssetManifest {
  /** Unique ID for the generated media asset */
  asset_id: string;
  /** The target audience / format (e.g., 'founder_demo', 'academy_lesson') */
  target_experience: string;
  /** The ordered sequence of scenes */
  scenes: Scene[];
  /** Flag indicating if the final compiled asset passed the Evidence Validator */
  validation_status: 'PENDING' | 'APPROVED' | 'REJECTED';
}
