import { Actor, CompetencyIntelligence } from './competency';

const engine = new CompetencyIntelligence();

// 1. A student entering the Academy
const student: Actor = {
  id: 'USER-992',
  name: 'Curious Learner',
  role: 'Student',
  competencies: [
    {
      id: 'COMP-01',
      domain: 'Systems Science',
      level: 'Curiosity',
      capabilitiesUnlocked: ['Observe System']
    }
  ]
};

console.log("====================================================");
console.log("AXIONYX ACADEMY: HUMAN INTELLIGENCE EVALUATION");
console.log("====================================================\n");

console.log(`Evaluating Student [${student.name}] for Capability [Run ISO 1171 Investigation]...`);
let hasPermission = engine.evaluatePermission(student, 'Run ISO 1171 Investigation');

if (!hasPermission) {
  console.log("-> ❌ Permission Denied. Competency level insufficient.");
}

// 2. The student practices and gains Mastery
console.log("\n...Student completes modules and demonstrates reasoning...");
student.competencies.push({
  id: 'COMP-02',
  domain: 'Laboratory Science',
  level: 'Mastery',
  capabilitiesUnlocked: ['Run ISO 1171 Investigation']
});

console.log(`\nRe-evaluating Student [${student.name}]...`);
hasPermission = engine.evaluatePermission(student, 'Run ISO 1171 Investigation');

if (hasPermission) {
  console.log("-> ✅ Permission Granted. Capability unlocked!");
}
