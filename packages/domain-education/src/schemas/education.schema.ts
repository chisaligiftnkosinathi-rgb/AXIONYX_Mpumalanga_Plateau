import { Asset, Event, Evidence, Policy, Outcome, Reflection, GovernanceDecision } from '../../../engineering-os-kernel/src/schemas/primitives.schema';

/**
 * The AXIONYX Learning Stewardship Platform (Education Domain Pack)
 * This schema maps the frozen Canonical Stewardship Language (CSL 1.0) 
 * into the educational domain.
 */

// Asset -> Learner
export interface Learner extends Asset {
  type: 'LEARNER';
  gradeLevel: string;
  portfolioId: string;
}

// Event -> Learning Activity
export interface LearningActivity extends Event {
  type: 'LEARNING_ACTIVITY';
  subject: string;
  topic: string;
  activityType: 'EXPERIMENT' | 'PROJECT' | 'ASSIGNMENT' | 'RESEARCH';
  requiredEvidenceElements: string[]; // e.g. ['HYPOTHESIS', 'VARIABLES', 'MEASUREMENTS', 'GRAPH', 'CONCLUSION', 'REFLECTION']
  durationMinutes: number;
}

// Evidence -> Evidence Artifact
export interface EvidenceArtifact extends Evidence {
  type: 'EVIDENCE_ARTIFACT';
  format: 'PDF' | 'VIDEO' | 'DATASET' | 'CODE' | 'OBSERVATION_LOG';
  activityId: string;
}

// Intervention -> Feedback
export interface Feedback {
  id: string;
  evidenceId: string;
  provider: 'TEACHER' | 'PEER' | 'SCIE_ENGINE';
  reasoning: string;
  falsificationPrompt?: string; // AI teaching scientific thinking
  timestamp: string;
}

// Policy -> Curriculum Standard
export interface CurriculumStandard extends Policy {
  authority: 'IEB' | 'CAPS' | 'CAMBRIDGE' | 'IB';
  subject: string;
  learningOutcome: string;
  assessmentStandard: string;
  requiredCompetencies: string[];
}

// Outcome -> Mastery
export interface Mastery extends Outcome {
  competencyId: string;
  level: 'NOVICE' | 'DEVELOPING' | 'COMPETENT' | 'MASTERY';
  evidenceChain: string[]; // Array of Evidence IDs
}

// Qualification Framework
export interface QualificationFramework {
  id: string;
  name: string; // e.g., 'National Senior Certificate'
  version: string;
  competencies: string[]; // Required competencies
  requiredEvidence: string[]; // Rules for evidence types
  assessmentRules: string[];
  moderationRules: string[];
  completionRules: string[];
}

// Evidence Completeness Metric
export interface EvidenceCompleteness {
  activityId: string;
  requiredElements: string[];
  presentElements: string[];
  missingElements: string[];
  completenessPercentage: number;
}

// Demonstrated Competency
export interface Competency {
  id: string;
  name: string;
  description: string;
  domain: string;
}

// The Portfolio (Stewardship Twin for Education)
export interface Portfolio {
  learnerId: string;
  competencies: Record<string, Mastery>; // Competency ID -> Mastery Level
  reflections: Reflection[];
  evidenceLog: EvidenceArtifact[];
  completenessMetrics: Record<string, EvidenceCompleteness>; // Activity ID -> Metric
  lastUpdated: string;
}

// The School Twin
export interface SchoolTwin {
  id: string;
  name: string;
  curriculumCoverageScore: number;
  assessmentQualityScore: number;
  moderationOutcomes: string[];
  teacherDevelopmentLogs: string[];
  qualificationReadinessAggregates: Record<string, number>; // Framework ID -> % of learners ready
}
