// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/event-stream/src/events/knowledge-events.ts

export interface KnowledgeEventRecord {
  id: string;
  type: 'PATTERN_DETECTED' | 'HYPOTHESIS_PROPOSED' | 'PRINCIPLE_VALIDATED';
  entityId: string; // ID of the Pattern/Hypothesis/Principle
  description: string;
  evidence: string[]; // simulation run IDs
  timestamp: Date;
}
