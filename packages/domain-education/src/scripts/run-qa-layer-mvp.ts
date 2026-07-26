import { SAQTLAdapter } from '../adapters/saqtl.adapter';
import { EvidenceGapAnalyzer } from '../capabilities/evidence-gap-analyzer.capability';
import { ModerationEngine } from '../capabilities/moderation-engine.capability';
import { Portfolio, LearningActivity, EvidenceArtifact, SchoolTwin, Mastery } from '../schemas/education.schema';

async function runQALayerMVP() {
  console.log("==================================================");
  console.log(" AXIONYX QUALIFICATION EVIDENCE INFRASTRUCTURE    ");
  console.log("==================================================\n");

  // 1. SAQTL loads the National Standards
  console.log("[SYSTEM] Loading National Senior Certificate Framework via SAQTL...");
  const nscFramework = SAQTLAdapter.loadNSCQualification();
  console.log(`[SYSTEM] Loaded Framework: ${nscFramework.name} v${nscFramework.version}\n`);

  // 2. Setup a School Twin and a Learner Portfolio
  const school: SchoolTwin = {
    id: 'school-curro-001',
    name: 'Curro Aurora',
    curriculumCoverageScore: 100,
    assessmentQualityScore: 100, // Starts perfect, gets moderated
    moderationOutcomes: [],
    teacherDevelopmentLogs: [],
    qualificationReadinessAggregates: {}
  };

  const activity: LearningActivity = {
    id: 'act-102',
    type: 'LEARNING_ACTIVITY',
    assetId: 'learner-002',
    subject: 'Physical Sciences',
    topic: 'Reaction Rates',
    activityType: 'EXPERIMENT',
    requiredEvidenceElements: ['Hypothesis', 'Variables', 'Measurements', 'Graph', 'Conclusion', 'Reflection'],
    durationMinutes: 60,
    timestamp: new Date().toISOString()
  };

  // Learner submitted evidence (Missing Graph and Reflection)
  const evidence: EvidenceArtifact = {
    id: 'ev-202',
    type: 'EVIDENCE_ARTIFACT',
    eventId: activity.id,
    activityId: activity.id,
    sourceId: 'learner-002',
    format: 'OBSERVATION_LOG',
    confidenceScore: 0.8,
    data: 'Hypothesis: higher temp means faster reaction. Variables: Temperature. Measurements: 10s at 20C, 5s at 40C. Conclusion: hypothesis is correct.',
    hash: '0xdef456',
    timestamp: new Date().toISOString()
  };

  const mastery: Mastery = {
    id: 'mast-302',
    type: 'OUTCOME',
    interventionId: 'teacher-review-1',
    competencyId: 'nsc-physical-sciences-level-5',
    level: 'MASTERY', // Teacher gave a high mark!
    evidenceChain: [evidence.id],
    resultData: 'Student achieved 85% on practical.',
    timestamp: new Date().toISOString()
  };

  const portfolio: Portfolio = {
    learnerId: 'learner-002',
    competencies: { 'nsc-physical-sciences-level-5': mastery },
    reflections: [],
    evidenceLog: [evidence],
    completenessMetrics: {},
    lastUpdated: new Date().toISOString()
  };

  // 3. Evidence Gap Analyzer runs
  console.log("[EVIDENCE GAP ANALYZER] Analyzing Learner Portfolio Completeness...");
  const gapAnalyzer = new EvidenceGapAnalyzer();
  const completeness = gapAnalyzer.analyzeCompleteness(portfolio, activity);
  portfolio.completenessMetrics[activity.id] = completeness;
  
  console.log(`\n${gapAnalyzer.generateReadinessReport([completeness])}`);

  // 4. Moderation Engine audits the school
  console.log("\n[MODERATION ENGINE] Executing School-wide Assessment Quality Audit...");
  const moderationEngine = new ModerationEngine();
  const updatedSchool = moderationEngine.moderateSchool(school, [portfolio]);

  console.log(`\n[SYSTEM] Moderation Complete. School Twin Snapshot:`);
  console.log(JSON.stringify(updatedSchool, null, 2));
}

// Execute
runQALayerMVP().catch(console.error);
