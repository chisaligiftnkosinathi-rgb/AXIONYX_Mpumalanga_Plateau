export type Persona = 'Auditor' | 'LaboratoryManager' | 'Executive' | 'Student' | 'Investor';

export interface StoryScene {
  id: string;
  title: string;
  narration: string;
  visuals: string[];
  evidenceRefs: string[];
}

export interface Storyboard {
  story: {
    title: string;
    audience: Persona;
    durationSeconds: number;
  };
  scenes: StoryScene[];
}
