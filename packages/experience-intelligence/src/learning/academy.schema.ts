export interface AcademyModule {
  id: string;
  title: string;
  sourceReality: string;
  difficulty: "school" | "university" | "professional";
  learningObjectives: string[];
  evidenceReferences: string[];
}
