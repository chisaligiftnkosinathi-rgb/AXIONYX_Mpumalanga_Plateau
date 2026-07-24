// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/connectors/src/common/index.ts

export type TargetAudience = 'Academy' | 'Public' | 'Professional' | 'Research';
export type OutputFormat = 'Markdown' | 'HTML' | 'PDF' | 'VideoScript' | 'Interactive' | 'JSON';

export interface PublishContext {
  investigationId: string;
  audience: TargetAudience;
  format: OutputFormat;
  content: string;
  metadata: Record<string, any>;
}

export interface Connector {
  id: string;
  name: string;
  type: 'LMS' | 'Media' | 'Document' | 'Collaboration' | 'Storage';
  
  /**
   * Initializes the connection to the external platform.
   */
  authenticate(): Promise<boolean>;

  /**
   * Publishes the compiled content to the target destination.
   */
  publish(context: PublishContext): Promise<string>;
}

export interface LMSConnector extends Connector {
  type: 'LMS';
  createCourse(title: string, description: string): Promise<string>;
  createModule(courseId: string, title: string): Promise<string>;
  createLesson(moduleId: string, title: string, content: string): Promise<string>;
  createAssignment(moduleId: string, title: string, rubric: any): Promise<string>;
  createQuiz(moduleId: string, questions: any[]): Promise<string>;
  enrollStudent(courseId: string, studentId: string): Promise<boolean>;
  syncGrades(courseId: string): Promise<any[]>;
}
