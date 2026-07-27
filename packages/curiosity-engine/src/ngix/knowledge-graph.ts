export class KnowledgeGraph {
  public mapQuestionToDomains(question: string): string[] {
    if (question.toLowerCase().includes('coal')) {
      return ['Chemistry', 'Mining', 'Energy', 'Environmental Science'];
    }
    if (question.toLowerCase().includes('electricity')) {
      return ['Electrical Engineering', 'Energy Systems', 'Physics'];
    }
    return ['General Knowledge'];
  }
}
