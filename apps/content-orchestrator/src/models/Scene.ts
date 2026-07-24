export interface Scene {
  id: string;
  title: string;
  purpose: string;
  narration: string;
  cameraInstruction: string;
  animationInstruction: string;
  requiredAssets: string[];
  evidenceTrace: string[]; // Ties the scene back to the AXIONYX immutable Event Store
  durationSeconds: number;
}

export interface ContentStoryboard {
  storyId: string;
  topic: string;
  targetAudience: string;
  tone: string;
  scenes: Scene[];
}
