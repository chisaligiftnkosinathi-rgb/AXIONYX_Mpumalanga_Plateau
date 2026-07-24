import { pgTable, uuid, varchar, jsonb, timestamp, index } from 'drizzle-orm/pg-core';

/**
 * PLANE 1: EVENT STORE
 * The immutable ledger of facts.
 */
export const eventStore = pgTable('event_store', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: varchar('type', { length: 255 }).notNull(),
  aggregateId: varchar('aggregate_id', { length: 255 }).notNull(),
  payload: jsonb('payload').notNull(),
  metadata: jsonb('metadata'),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
}, (table) => {
  return {
    aggregateIdx: index('idx_event_store_aggregate').on(table.aggregateId),
    typeIdx: index('idx_event_store_type').on(table.type),
    timestampIdx: index('idx_event_store_timestamp').on(table.timestamp)
  };
});

/**
 * PLANE 2: READ MODELS
 * Rebuildable projections optimized for queries.
 */
export const readModels = pgTable('read_models', {
  id: varchar('id', { length: 255 }).primaryKey(),
  projectionName: varchar('projection_name', { length: 255 }).notNull(),
  state: jsonb('state').notNull(),
  lastEventId: uuid('last_event_id'),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
}, (table) => {
  return {
    projectionIdx: index('idx_read_models_name').on(table.projectionName)
  };
});

/**
 * PLANE 3: REFERENCE DATA
 * Slowly changing dimensional data (ISO standards, units, etc). Never replayed.
 */
export const referenceData = pgTable('reference_data', {
  id: varchar('id', { length: 255 }).primaryKey(),
  domain: varchar('domain', { length: 255 }).notNull(), // e.g. 'iso17025', 'currency'
  key: varchar('key', { length: 255 }).notNull(),
  value: jsonb('value').notNull(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});

/**
 * PLANE 4: CONFIGURATION
 * Organization settings, policies, and RBAC rules. Never replayed.
 */
export const configuration = pgTable('configuration', {
  id: varchar('id', { length: 255 }).primaryKey(),
  scope: varchar('scope', { length: 255 }).notNull(), // e.g. 'policy', 'rbac'
  key: varchar('key', { length: 255 }).notNull(),
  settings: jsonb('settings').notNull(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});
