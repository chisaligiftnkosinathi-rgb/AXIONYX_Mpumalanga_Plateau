import { IEventStore } from './IEventStore';
import { DomainEvent } from '@axionyx/event-bus';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eventStore } from './schema';
import { eq, asc } from 'drizzle-orm';

export class PostgresEventStore implements IEventStore {
  constructor(private db: NodePgDatabase<any>) {}

  async append(event: DomainEvent): Promise<void> {
    await this.db.insert(eventStore).values({
      type: event.eventType,
      aggregateId: event.aggregateId,
      payload: event.payload as any,
      timestamp: event.emittedAt
    });
  }

  async getEventsForAggregate(aggregateId: string): Promise<DomainEvent[]> {
    const records = await this.db
      .select()
      .from(eventStore)
      .where(eq(eventStore.aggregateId, aggregateId))
      .orderBy(asc(eventStore.timestamp));

    return records.map(r => ({
      eventId: r.id,
      eventType: r.type,
      aggregateId: r.aggregateId,
      payload: r.payload,
      emittedAt: r.timestamp
    })) as DomainEvent[];
  }

  async replayAll(handler: (event: DomainEvent) => Promise<void>): Promise<void> {
    // In a production system, this would use a cursor/stream to avoid OOM
    const records = await this.db
      .select()
      .from(eventStore)
      .orderBy(asc(eventStore.timestamp));
      
    for (const record of records) {
      await handler({
        eventId: record.id,
        eventType: record.type,
        aggregateId: record.aggregateId,
        payload: record.payload,
        emittedAt: record.timestamp
      } as DomainEvent);
    }
  }
}
