// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/schemas/research-project.ts

import { Experiment } from './experiment';
import { Hypothesis } from './hypothesis';
import { Collaboration } from './collaboration';

export interface ResearchProject {
  id: string;
  title: string; // e.g. "Design a Sustainable Energy System"
  objective: string;
  domainContexts: string[]; // e.g. ['Energy', 'Chemistry', 'Finance']
  experiments: Experiment[];
  hypotheses: Hypothesis[];
  collaborators: Collaboration[];
  status: 'PROPOSED' | 'IN_PROGRESS' | 'PEER_REVIEW' | 'PUBLISHED';
}
