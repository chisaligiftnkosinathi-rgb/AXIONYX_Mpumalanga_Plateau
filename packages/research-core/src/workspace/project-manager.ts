// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-core/src/workspace/project-manager.ts

import { ResearchProject } from '../schemas/research-project';
import { ExperimentManager } from './experiment-manager';

export class ProjectManager {
  /**
   * Initializes a new workspace for AXIONYX human-machine collaboration.
   */
  static createProject(title: string, domains: string[]): ResearchProject {
    return {
      id: `proj-${Date.now()}`,
      title,
      objective: 'Define objective',
      domainContexts: domains,
      experiments: [],
      hypotheses: [],
      collaborators: [],
      status: 'PROPOSED'
    };
  }
}
