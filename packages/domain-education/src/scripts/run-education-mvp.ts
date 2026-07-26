import { IEBCurriculumAdapter } from '../adapters/ieb-curriculum.adapter';
import { ScieEngineCapability } from '../capabilities/scie-engine.capability';
import { Learner, LearningActivity, EvidenceArtifact, Portfolio, Mastery } from '../schemas/education.schema';

/**
 * Simulates a high school laboratory workflow using the Learning Stewardship Platform.
 * Paradigm Shift: "Learner -> Evidence -> Competency -> Portfolio"
 */
async function runEducationMVP() {
  console.log("=========================================");
  console.log(" AXIONYX EDUCATION PLATFORM (CURRO/IEB)  ");
  console.log("=========================================\n");

  // 1. System loads the Curriculum Policies
  console.log("[SYSTEM] Loading IEB Curriculum Policies via Adapter...");
  const iebPolicies = IEBCurriculumAdapter.loadPhysicalSciencesStandard(10);
  console.log(`[SYSTEM] Loaded Policy: ${iebPolicies[0].learningOutcome}\n`);

  // 2. Initialize the Learner's Stewardship Twin (Portfolio)
  const learner: Learner = {
    id: 'learner-001',
    type: 'LEARNER',
    name: 'Alice M.',
    gradeLevel: 'Grade 10',
    portfolioId: 'port-001'
  };

  const portfolio: Portfolio = {
    learnerId: learner.id,
    competencies: {},
    reflections: [],
    evidenceLog: [],
    lastUpdated: new Date().toISOString()
  };

  // 3. Learner conducts a Learning Activity
  console.log(`[STUDENT] ${learner.name} begins Experiment 3.2 (Reaction Rates)...`);
  const activity: LearningActivity = {
    id: 'act-101',
    type: 'LEARNING_ACTIVITY',
    assetId: learner.id,
    subject: 'Physical Sciences',
    topic: 'Rates of Reaction',
    activityType: 'EXPERIMENT',
    durationMinutes: 45,
    timestamp: new Date().toISOString()
  };

  // 4. Learner submits Evidence
  console.log(`[STUDENT] ${learner.name} submits Observation Log...`);
  const submittedEvidence: EvidenceArtifact = {
    id: 'ev-201',
    type: 'EVIDENCE_ARTIFACT',
    eventId: activity.id,
    format: 'OBSERVATION_LOG',
    activityId: activity.id,
    sourceId: learner.id,
    confidenceScore: 0.6, // Initial confidence
    data: 'iron rusted fast so it must be oxygen. no control group was used.',
    hash: '0xabc123',
    timestamp: new Date().toISOString()
  };
  portfolio.evidenceLog.push(submittedEvidence);

  // 5. ScieEngine Audits the Evidence
  console.log("[SCIE-ENGINE] Auditing Evidence against IEB Policy...");
  const scieEngine = new ScieEngineCapability();
  const feedback = scieEngine.auditEvidence(submittedEvidence);
  
  console.log(`\n[SCIE-ENGINE FEEDBACK]`);
  console.log(`Reasoning: ${feedback.reasoning}`);
  console.log(`Inquiry Prompt: ${feedback.falsificationPrompt}\n`);

  // 6. Outcome -> Mastery Update
  console.log("[TEACHER OBSERVATORY] Updating Mastery Portfolio based on Evidence...");
  
  // The system doesn't assign a "percentage mark". It assesses the specific competency.
  // In this case, because the experiment lacked a control, experimental design is only 'DEVELOPING'.
  const mastery: Mastery = {
    id: 'mast-301',
    type: 'OUTCOME',
    interventionId: feedback.id,
    competencyId: 'comp-experimental-design',
    level: 'DEVELOPING',
    evidenceChain: [submittedEvidence.id],
    resultData: 'Learner attempted the experiment but failed to isolate variables.',
    timestamp: new Date().toISOString()
  };

  portfolio.competencies[mastery.competencyId] = mastery;
  portfolio.lastUpdated = new Date().toISOString();

  // 7. Final Output (The Permanent Educational Identity)
  console.log("[SYSTEM] Experiment Complete. Current Portfolio Snapshot:");
  console.log(JSON.stringify(portfolio, null, 2));
}

// Execute
runEducationMVP().catch(console.error);
