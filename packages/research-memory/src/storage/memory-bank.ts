// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/research-memory/src/storage/memory-bank.ts

import { MemoryRecord } from '../schemas/memory-record';

export class MemoryBank {
  private records: MemoryRecord[] = [];

  storeRecord(record: MemoryRecord) {
    this.records.push(record);
    console.log(`[Memory Bank] Stored ${record.type}: ${record.context}`);
  }

  queryMemory(context: string): MemoryRecord[] {
    return this.records.filter(r => r.context.includes(context));
  }
}
