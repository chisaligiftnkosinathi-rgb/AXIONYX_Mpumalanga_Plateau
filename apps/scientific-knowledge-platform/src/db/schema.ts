import { pgTable, text, timestamp, uuid, jsonb, varchar } from 'drizzle-orm/pg-core';

// ==========================================
// 1. OPERATIONAL TABLES (Current State)
// ==========================================

export const samples = pgTable('samples', {
  id: uuid('id').primaryKey().defaultRandom(),
  status: varchar('status', { length: 50 }).notNull(), // e.g. REGISTERED, RECEIVED, IN_ANALYSIS
  metadata: jsonb('metadata'), // e.g. material type, preservation
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const instruments = pgTable('instruments', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(), // e.g. ONLINE, CALIBRATION_DUE
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const measurements = pgTable('measurements', {
  id: uuid('id').primaryKey().defaultRandom(),
  sampleId: uuid('sample_id').references(() => samples.id).notNull(),
  instrumentId: uuid('instrument_id').references(() => instruments.id),
  value: text('value').notNull(),
  unit: varchar('unit', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==========================================
// 2. IMMUTABLE EVIDENCE TABLES (History)
// ==========================================

export const events = pgTable('events', {
  id: uuid('id').primaryKey().defaultRandom(),
  aggregateId: uuid('aggregate_id').notNull(), // Links to sample, instrument, etc.
  eventType: varchar('event_type', { length: 100 }).notNull(), // e.g. SampleRegistered, MeasurementCaptured
  payload: jsonb('payload').notNull(),
  emittedAt: timestamp('emitted_at').defaultNow().notNull(),
});

export const evidence = pgTable('evidence', {
  id: uuid('id').primaryKey().defaultRandom(),
  eventId: uuid('event_id').references(() => events.id).notNull(),
  hash: varchar('hash', { length: 64 }).notNull(), // Cryptographic proof
  signature: text('signature'), // Digital signature
  recordedAt: timestamp('recorded_at').defaultNow().notNull(),
});

export const timelineEvents = pgTable('timeline_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  entityId: uuid('entity_id').notNull(),
  description: text('description').notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
});
