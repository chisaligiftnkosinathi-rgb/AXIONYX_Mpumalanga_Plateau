// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/agent-orchestration-v2/src/research-director-agent.ts

import { PlanningEngine } from './planning-engine';

export class ResearchDirectorAgent {
  /**
   * Translates high-level goals into multi-agent investigation plans.
   */
  static formulateResearchProgram(goal: string) {
    console.log(`[Research Director] Formulating program for goal: ${goal}`);
    const plan = PlanningEngine.decomposeGoal(goal);
    return plan;
  }
}
