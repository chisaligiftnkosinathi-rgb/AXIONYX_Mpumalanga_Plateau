// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/interpretation-engine/examples/water-cycle.ts

import { LearningExtractionPipeline } from '../src/pipeline/learning-extraction';
import { UniversalKnowledgeGraph } from '../src/knowledge/knowledge-graph';

/**
 * Experiment 1: The Water Cycle
 * Demonstrates the Interpretation Engine extracting universal rules from physical simulation outputs.
 */

// 1. Initialize the Knowledge Graph
const knowledgeGraph = new UniversalKnowledgeGraph();

console.log("Starting Water Cycle Learning Experiment...");

// 2. The Computational Engine outputs an Observation (e.g., thermal boundary crossed)
const observation = LearningExtractionPipeline.extractObservation({ 
  tick: 10, 
  temp: 1, 
  entity: 'H2O' 
});
knowledgeGraph.observations.set(observation.id, observation);
console.log(`[Observation] ${observation.measurement}`);

// 3. The Engine detects a Pattern across multiple ticks
const pattern = LearningExtractionPipeline.detectPattern([observation]);
knowledgeGraph.patterns.set(pattern.id, pattern);
console.log(`[Pattern Detected] ${pattern.description}`);

// 4. A Hypothesis is proposed based on the Pattern
const hypothesis = LearningExtractionPipeline.proposeHypothesis(pattern);
knowledgeGraph.hypotheses.set(hypothesis.id, hypothesis);
console.log(`[Hypothesis Proposed] ${hypothesis.statement} (Status: ${hypothesis.status})`);

// 5. Cross-domain validation occurs (e.g., checking battery simulation logs)
// For the sake of the experiment, we simulate a successful cross-domain match.
const isValidatedAcrossDomains = true;
hypothesis.confidence = 0.95; 

// 6. The Hypothesis is elevated to a Universal Principle
const principle = LearningExtractionPipeline.validatePrinciple(hypothesis, isValidatedAcrossDomains);

if (principle) {
  knowledgeGraph.principles.set(principle.id, principle);
  console.log(`\n*** [UNIVERSAL PRINCIPLE VALIDATED] ***`);
  console.log(`Name: ${principle.name}`);
  console.log(`Description: ${principle.description}`);
  console.log(`Applies to Domains: ${principle.domains.join(', ')}`);
}

// 7. Feedback Learning: The Cyclic System Principle
// Simulating the extraction of the Ocean -> Cloud -> River -> Ocean flow
console.log(`\n[Feedback Learning Extraction]`);
console.log(`Name: Cyclic System Principle`);
console.log(`Description: Systems maintain continuity and stability through repeating flows.`);
console.log(`Applications: Water Cycle, Financial Capital Flow, Battery Charge Cycles`);
