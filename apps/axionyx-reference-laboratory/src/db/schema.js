import { pgTable, uuid, varchar, jsonb, timestamp, index } from 'drizzle-orm/pg-core';
export const laboratoryEventStore = pgTable('laboratory_event_store', {
    eventId: uuid('event_id').primaryKey().defaultRandom(),
    aggregateId: varchar('aggregate_id', { length: 255 }).notNull(),
    aggregateType: varchar('aggregate_type', { length: 255 }).notNull(),
    eventType: varchar('event_type', { length: 255 }).notNull(),
    payload: jsonb('payload').notNull(),
    metadata: jsonb('metadata'),
    actor: varchar('actor', { length: 255 }).notNull(),
    policyVersion: varchar('policy_version', { length: 255 }),
    schemaVersion: varchar('schema_version', { length: 255 }).notNull().default('1.0.0'),
    occurredAt: timestamp('occurred_at').notNull().defaultNow(),
}, (table) => {
    return {
        aggregateIdx: index('idx_lab_events_aggregate').on(table.aggregateId),
        typeIdx: index('idx_lab_events_type').on(table.eventType),
        timeIdx: index('idx_lab_events_time').on(table.occurredAt)
    };
});
