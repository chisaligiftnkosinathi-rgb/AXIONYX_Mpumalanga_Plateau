// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/curiosity-engine/src/schemas/investigation.ts

import { Observation } from './observation';
import { HiddenSkill } from './skills';

export type InvestigationType = 'ResearchMission' | 'LifeHackInvestigation' | 'AutomationMission';

export interface Investigation {
  id: string;
  type: InvestigationType;
  
  observation: Observation;
  hypotheses: string[];
  requiredMeasurements: string[];
  experiments: string[];
  tools: string[];
  expectedEvidence: string[];
  
  skillsGenerated: HiddenSkill[];
}
