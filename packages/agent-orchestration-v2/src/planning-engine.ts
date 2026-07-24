// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/agent-orchestration-v2/src/planning-engine.ts

import { TaskDecomposer } from './task-decomposer';
import { CollaborationManager } from './collaboration-manager';

export class PlanningEngine {
  static decomposeGoal(goal: string) {
    const tasks = TaskDecomposer.breakdown(goal);
    CollaborationManager.assignTasks(tasks);
    return tasks;
  }
}
