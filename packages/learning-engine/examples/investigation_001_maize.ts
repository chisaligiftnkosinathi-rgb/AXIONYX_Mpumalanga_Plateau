// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/learning-engine/examples/investigation_001_maize.ts

import { InvestigationLCS } from '../src/schemas/lcs';

export const MaizeInvestigationLCS: InvestigationLCS = {
  id: 'INV-001',
  title: 'Nitrogen Deficiency in Maize',
  domain: 'Agriculture & Biology',
  targetLevel: 'Investigator',

  discovery: {
    curiosityArchetype: 'Why?',
    observation: 'Maize leaves in Field A are turning yellow, starting from the tip and moving down the midrib.',
    question: 'Why do maize leaves turn yellow in this specific V-shaped pattern?',
    mystery: 'The plant is selectively shutting down chlorophyll production in older leaves but maintaining it in newer leaves. Why?',
    realWorldContext: 'A farmer in Zambia is losing 30% of their expected crop yield despite adequate rainfall.',
    whyItMatters: 'Understanding this mechanism allows us to optimize resource allocation, ensuring food security and reducing chemical runoff.'
  },

  investigation: {
    hypotheses: [
      'The plant lacks sufficient water.',
      'The plant lacks sufficient nitrogen.',
      'The plant is infected with a fungal pathogen.'
    ],
    observations: [
      'Soil moisture is 45% (adequate).',
      'Yellowing is occurring on older, lower leaves first.',
      'There are no visible fungal spores or lesions.'
    ],
    evidence: [
      'Nitrogen is a mobile nutrient. The plant moves it from old leaves to new growth.',
      'Soil test reveals 10 ppm Nitrate (Deficient).'
    ],
    measurements: ['Soil Nitrate Level (ppm)', 'Leaf Chlorophyll Content (SPAD value)'],
    standards: ['ISO 14256-1 (Soil Quality - Determination of Nitrate)'],
    constraints: ['Nitrogen >= 25 ppm for optimal growth'],
    experiments: ['Apply 50kg/ha of Urea to Test Plot and measure SPAD after 7 days.']
  },

  understanding: {
    concepts: ['Mobile vs. Immobile Nutrients', 'Chlorophyll Synthesis', 'Resource Allocation'],
    relationships: [
      'Nitrogen is required for Chlorophyll.',
      'Chlorophyll is required for Photosynthesis.'
    ],
    systems: ['Soil Nutrient Cycle', 'Plant Vascular System'],
    capabilities: ['Photosynthesize', 'Transpire', 'Yield Grain'],
    naturalLaws: ['Conservation of Mass', 'Thermodynamics (Energy capture via Photosynthesis)']
  },

  application: {
    diagnosis: ['Nitrogen Deficiency causing capability degradation in Photosynthesis.'],
    recommendations: ['Apply nitrogen-based fertilizer.', 'Adjust irrigation to prevent leaching.'],
    workflow: ['Test Soil', 'Analyze Gap', 'Apply Intervention', 'Verify Growth'],
    verification: ['Measure SPAD value increase after intervention.'],
    reflection: ['Did the intervention resolve the root cause or just treat the symptom?']
  },

  contribution: {
    researchQuestion: 'How does soil temperature affect the rate of nitrogen mineralization in this specific region?',
    missingKnowledge: 'Local mineralization curves for Zambian soil types are incomplete.',
    githubIssue: '#42 - Map Nitrogen Mineralization Rates for Region Z',
    knowledgeProposal: 'Submit a new Relationship Node linking Soil Temp to Mineralization Rate.',
    peerReview: 'Requires verification by an Ecology Steward.'
  }
};
