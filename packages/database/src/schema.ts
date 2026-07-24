// Drizzle ORM Schema Definitions for AXIONYX Phase 1

import { pgTable, uuid, varchar, timestamp, jsonb, integer } from "drizzle-orm/pg-core";

export const identities = pgTable("identities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  roles: jsonb("roles").$type<string[]>(),
  capabilities: jsonb("capabilities").$type<string[]>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const missions = pgTable("missions", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: uuid("owner_id").references(() => identities.id).notNull(),
  domain: varchar("domain", { length: 255 }).notNull(),
  problem: varchar("problem", { length: 1000 }).notNull(),
  objective: varchar("objective", { length: 1000 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
});

export const missionDomains = pgTable("mission_domains", {
  id: uuid("id").primaryKey().defaultRandom(),
  missionId: uuid("mission_id").references(() => missions.id).notNull(),
  domainTag: varchar("domain_tag", { length: 100 }).notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  missionId: uuid("mission_id").references(() => missions.id).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // IDEA, BUILDING, VALIDATING, DEPLOYED
});

export const projectMembers = pgTable("project_members", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  identityId: uuid("identity_id").references(() => identities.id).notNull(),
  role: varchar("role", { length: 50 }).notNull(), // OWNER, CONTRIBUTOR, MENTOR, REVIEWER
});

export const artifacts = pgTable("artifacts", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  type: varchar("type", { length: 50 }).notNull(), // APPLICATION, MODEL, DOCUMENT, RESEARCH, VIDEO
  location: varchar("location", { length: 1000 }).notNull(),
  version: varchar("version", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const evidenceRecords = pgTable("evidence_records", {
  id: uuid("id").primaryKey().defaultRandom(),
  artifactId: uuid("artifact_id").references(() => artifacts.id).notNull(),
  type: varchar("type", { length: 50 }).notNull(), // DEPLOYMENT, CUSTOMER_FEEDBACK, METRIC
  validationStatus: varchar("validation_status", { length: 50 }).notNull(), // PENDING, VALIDATED
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const capabilities = pgTable("capabilities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  level: varchar("level", { length: 50 }).notNull(), // EXPLORER, BUILDER, ENGINEER, CREATOR
});

export const capabilityEvidence = pgTable("capability_evidence", {
  id: uuid("id").primaryKey().defaultRandom(),
  capabilityId: uuid("capability_id").references(() => capabilities.id).notNull(),
  evidenceId: uuid("evidence_id").references(() => evidenceRecords.id).notNull(),
});

export const portfolioEntries = pgTable("portfolio_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: uuid("owner_id").references(() => identities.id).notNull(),
  artifactId: uuid("artifact_id").references(() => artifacts.id).notNull(),
  visibility: varchar("visibility", { length: 50 }).notNull(), // PUBLIC, PRIVATE, ECOSYSTEM_ONLY
  description: varchar("description", { length: 1000 }).notNull(),
});

export const ipAssets = pgTable("ip_assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  creatorId: uuid("creator_id").references(() => identities.id).notNull(),
  ownershipModel: jsonb("ownership_model").notNull(),
  licenseStatus: varchar("license_status", { length: 50 }).notNull(),
});

export const workspaceEvents = pgTable("workspace_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  eventType: varchar("event_type", { length: 255 }).notNull(),
  actorId: uuid("actor_id").references(() => identities.id).notNull(),
  payload: jsonb("payload").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

// AXIONYX Phase 2 schema additions

export const programs = pgTable("programs", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  durationMonths: integer("duration_months").notNull(),
});

export const modules = pgTable("modules", {
  id: uuid("id").primaryKey().defaultRandom(),
  programId: uuid("program_id").references(() => programs.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  durationWeeks: integer("duration_weeks").notNull(),
  targetCapabilities: jsonb("target_capabilities").<string[]>(),
});

export const learningPaths = pgTable("learning_paths", {
  id: uuid("id").primaryKey().defaultRandom(),
  programId: uuid("program_id").references(() => programs.id).notNull(),
  sequence: jsonb("sequence").<string[]>(),
});

export const learnerEnrollments = pgTable("learner_enrollments", {
  id: uuid("id").primaryKey().defaultRandom(),
  identityId: uuid("identity_id").references(() => identities.id).notNull(),
  programId: uuid("program_id").references(() => programs.id).notNull(),
  state: varchar("state", { length: 50 }).notNull(), // APPLIED -> GRADUATE
  enrolledAt: timestamp("enrolled_at").defaultNow().notNull(),
});

export const moduleProgress = pgTable("module_progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  enrollmentId: uuid("enrollment_id").references(() => learnerEnrollments.id).notNull(),
  moduleId: uuid("module_id").references(() => modules.id).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // NOT_STARTED, IN_PROGRESS, COMPLETED
});

export const challenges = pgTable("challenges", {
  id: uuid("id").primaryKey().defaultRandom(),
  moduleId: uuid("module_id").references(() => modules.id).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 100 }).notNull(),
  requiredCapabilityLevel: varchar("required_capability_level", { length: 50 }).notNull(),
  evidenceRequirements: jsonb("evidence_requirements").<string[]>(),
});

export const challengeSubmissions = pgTable("challenge_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  challengeId: uuid("challenge_id").references(() => challenges.id).notNull(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // SUBMITTED, IN_REVIEW, VALIDATED, REJECTED
});

export const mentorRelationships = pgTable("mentor_relationships", {
  id: uuid("id").primaryKey().defaultRandom(),
  mentorId: uuid("mentor_id").references(() => identities.id).notNull(),
  learnerId: uuid("learner_id").references(() => identities.id).notNull(),
  status: varchar("status", { length: 50 }).notNull(), // ACTIVE, CONCLUDED
});

export const capabilityReviews = pgTable("capability_reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  mentorId: uuid("mentor_id").references(() => identities.id).notNull(),
  submissionId: uuid("submission_id").references(() => challengeSubmissions.id).notNull(),
  feedback: varchar("feedback", { length: 2000 }).notNull(),
  capabilityGranted: varchar("capability_granted", { length: 255 }),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

// AXIONYX Phase 2.5 schema additions

export const knowledgeNodes = pgTable("knowledge_nodes", {
  id: uuid("id").primaryKey().defaultRandom(),
  concept: varchar("concept", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 255 }).notNull(),
  prerequisites: jsonb("prerequisites").<string[]>(),
  relatedCapabilities: jsonb("related_capabilities").<string[]>(),
  resources: jsonb("resources").<string[]>(),
});

export const capabilityNodes = pgTable("capability_nodes", {
  id: uuid("id").primaryKey().defaultRandom(),
  capabilityName: varchar("capability_name", { length: 255 }).notNull(),
  requiredKnowledgeNodes: jsonb("required_knowledge_nodes").<string[]>(),
  requiredEvidenceTypes: jsonb("required_evidence_types").<string[]>(),
  baseLevel: varchar("base_level", { length: 50 }).notNull(),
});

export const teams = pgTable("teams", {
  id: uuid("id").primaryKey().defaultRandom(),
  missionId: uuid("mission_id").references(() => missions.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const teamMembers = pgTable("team_members", {
  id: uuid("id").primaryKey().defaultRandom(),
  teamId: uuid("team_id").references(() => teams.id).notNull(),
  identityId: uuid("identity_id").references(() => identities.id).notNull(),
});

export const teamProjects = pgTable("team_projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  teamId: uuid("team_id").references(() => teams.id).notNull(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
});

export const academyMetrics = pgTable("academy_metrics", {
  id: uuid("id").primaryKey().defaultRandom(),
  metricType: varchar("metric_type", { length: 100 }).notNull(),
  value: integer("value").notNull(),
  actorId: uuid("actor_id").references(() => identities.id).notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const aiMemory = pgTable("ai_memory", {
  id: uuid("id").primaryKey().defaultRandom(),
  identityId: uuid("identity_id").references(() => identities.id).notNull(),
  currentMissionId: uuid("current_mission_id").references(() => missions.id),
  currentProjectId: uuid("current_project_id").references(() => projects.id),
  currentCapabilityLevel: varchar("current_capability_level", { length: 100 }),
  historicalContext: varchar("historical_context", { length: 5000 }),
});

// AXIONYX Phase 3 schema additions

export const organizations = pgTable("organizations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  type: varchar("type", { length: 50 }).notNull(),
  identityId: uuid("identity_id").references(() => identities.id).notNull(),
});

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  problemSolved: text("problem_solved").notNull(),
  targetCustomer: varchar("target_customer", { length: 255 }).notNull(),
  lifecycleState: varchar("lifecycle_state", { length: 50 }).notNull(),
  impactMetrics: jsonb("impact_metrics").<string[]>(),
});

export const offerings = pgTable("offerings", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => products.id).notNull(),
  offeringType: varchar("offering_type", { length: 50 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(false).notNull(),
});

export const commercialReadinessScores = pgTable("commercial_readiness_scores", {
  productId: uuid("product_id").references(() => products.id).primaryKey(),
  engineeringScore: integer("engineering_score").notNull(),
  marketScore: integer("market_score").notNull(),
  operationalScore: integer("operational_score").notNull(),
  legalScore: integer("legal_score").notNull(),
  financialScore: integer("financial_score").notNull(),
  overallScore: integer("overall_score").notNull(),
});

export const investmentProfiles = pgTable("investment_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => products.id).notNull(),
  pitchDeckUrl: varchar("pitch_deck_url", { length: 500 }).notNull(),
  businessModel: text("business_model").notNull(),
  traction: text("traction").notNull(),
  revenue: integer("revenue").notNull(),
  marketSize: integer("market_size").notNull(),
  ipStatus: varchar("ip_status", { length: 255 }).notNull(),
  riskAnalysis: text("risk_analysis").notNull(),
});

export const revenueEventsCommercial = pgTable("revenue_events_commercial", {
  id: uuid("id").primaryKey().defaultRandom(),
  offeringId: uuid("offering_id").references(() => offerings.id).notNull(),
  customerId: varchar("customer_id", { length: 255 }).notNull(), // Polymorphic to identity or org
  amount: integer("amount").notNull(),
  creatorShare: integer("creator_share").notNull(),
  axionyxShare: integer("axionyx_share").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});
