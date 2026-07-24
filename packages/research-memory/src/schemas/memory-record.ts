// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-memory/src/schemas/memory-record.ts

export interface MemoryRecord {
  id: string;
  type: 'EXPERIMENT' | 'FAILED_HYPOTHESIS' | 'SUCCESSFUL_MODEL' | 'LESSON_LEARNED';
  context: string;
  payload: any;
  timestamp: Date;
}
