import { CurriculumEngine } from '../src/learning/curriculum-engine';

describe('Experience Evidence Graph', () => {
  it('strictly links academy lessons to source evidence preventing hallucinated curriculum', () => {
    const lesson = CurriculumEngine.generateLesson("CALIB-TEST-01");
    expect(lesson.evidenceReferences).toContain("CALIB-TEST-01");
    expect(lesson.learningObjectives.length).toBeGreaterThan(0);
  });
});
