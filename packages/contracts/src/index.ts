import { z } from "zod";

export const WorkspaceRoleSchema = z.enum([
  'OWNER', 'CONTRIBUTOR', 'MENTOR', 'REVIEWER', 'CUSTOMER'
]);

export const IdentitySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  roles: z.array(z.string()),
  capabilities: z.array(z.string()),
  createdAt: z.date()
});

export const MissionSchema = z.object({
  id: z.string().uuid(),
  ownerId: z.string().uuid(),
  domain: z.string(),
  problem: z.string(),
  objective: z.string(),
  status: z.enum(['DISCOVERY', 'ACTIVE', 'ACHIEVED'])
});

export const CapabilitySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  level: z.enum(['EXPLORER', 'BUILDER', 'ENGINEER', 'CREATOR']),
  evidenceIds: z.array(z.string().uuid())
});

export const ProjectSchema = z.object({
  id: z.string().uuid(),
  missionId: z.string().uuid(),
  contributors: z.array(z.string().uuid()),
  status: z.enum(['IDEA', 'BUILDING', 'VALIDATING', 'DEPLOYED', 'LICENSED'])
});

export const ArtifactSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  type: z.enum(['APPLICATION', 'MODEL', 'DOCUMENT', 'RESEARCH', 'VIDEO']),
  location: z.string().url(),
  version: z.string(),
  createdAt: z.date()
});

export const EvidenceSchema = z.object({
  id: z.string().uuid(),
  artifactId: z.string().uuid(),
  type: z.enum(['DEPLOYMENT', 'CUSTOMER_FEEDBACK', 'METRIC', 'CODE']),
  artifactUrl: z.string().url(),
  validationStatus: z.enum(['PENDING', 'VALIDATED']),
  timestamp: z.date()
});

export const PortfolioEntrySchema = z.object({
  id: z.string().uuid(),
  ownerId: z.string().uuid(),
  artifactId: z.string().uuid(),
  visibility: z.enum(['PUBLIC', 'PRIVATE', 'ECOSYSTEM_ONLY']),
  description: z.string()
});

export const IPAssetSchema = z.object({
  id: z.string().uuid(),
  creatorId: z.string().uuid(),
  ownershipModel: z.object({
    creatorPercentage: z.number().min(0).max(100),
    ecosystemPercentage: z.number().min(0).max(100)
  }),
  licenseStatus: z.enum(['UNLICENSED', 'COMMERCIAL', 'OPEN_SOURCE'])
});

export const RevenueEventSchema = z.object({
  id: z.string().uuid(),
  assetId: z.string().uuid(),
  amount: z.number().positive(),
  distribution: z.object({
    creatorAmount: z.number().min(0),
    ecosystemAmount: z.number().min(0)
  }),
  timestamp: z.date()
});

export const LearnerStateSchema = z.enum([
  'APPLIED', 'REGISTERED', 'EXPLORER', 'BUILDER', 'REVIEW_PENDING', 'ENGINEER', 'CREATOR', 'GRADUATE'
]);

export const ProgramSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  durationMonths: z.number().positive()
});

export const ModuleSchema = z.object({
  id: z.string().uuid(),
  programId: z.string().uuid(),
  name: z.string(),
  durationWeeks: z.number().positive(),
  targetCapabilities: z.array(z.string())
});

export const LearningPathSchema = z.object({
  id: z.string().uuid(),
  programId: z.string().uuid(),
  sequence: z.array(z.string())
});

export const ChallengeSchema = z.object({
  id: z.string().uuid(),
  moduleId: z.string().uuid(),
  title: z.string(),
  domain: z.string(),
  requiredCapabilityLevel: z.string(),
  evidenceRequirements: z.array(z.string())
});

export const MentorProfileSchema = z.object({
  id: z.string().uuid(),
  identityId: z.string().uuid(),
  domainExpertise: z.array(z.string()),
  yearsExperience: z.number().nonnegative(),
  verifiedCapabilities: z.array(z.string()),
  availability: z.enum(['AVAILABLE', 'AT_CAPACITY', 'OFFLINE'])
});

export const KnowledgeNodeSchema = z.object({
  id: z.string().uuid(),
  concept: z.string(),
  domain: z.string(),
  prerequisites: z.array(z.string().uuid()),
  relatedCapabilities: z.array(z.string().uuid()),
  resources: z.array(z.string().url())
});

export const CapabilityNodeSchema = z.object({
  id: z.string().uuid(),
  capabilityName: z.string(),
  requiredKnowledgeNodes: z.array(z.string().uuid()),
  requiredEvidenceTypes: z.array(z.string()),
  baseLevel: z.string()
});

export const TeamSchema = z.object({
  id: z.string().uuid(),
  missionId: z.string().uuid(),
  name: z.string(),
  members: z.array(z.string().uuid()),
  projects: z.array(z.string().uuid())
});

export const AcademyMetricSchema = z.object({
  id: z.string().uuid(),
  metricType: z.enum(['CAPABILITY_CREATED', 'SOLUTION_BUILT', 'EVIDENCE_GENERATED', 'PROJECT_DEPLOYED', 'TEAM_FORMED', 'IP_CREATED', 'REVENUE_GENERATED', 'COMMUNITY_IMPACT']),
  value: z.number(),
  actorId: z.string().uuid(),
  timestamp: z.date()
});

export const AIMemoryContextSchema = z.object({
  id: z.string().uuid(),
  identityId: z.string().uuid(),
  currentMissionId: z.string().uuid(),
  currentProjectId: z.string().uuid(),
  currentCapabilityLevel: z.string(),
  historicalContext: z.string()
});

export const OrganizationTypeSchema = z.enum([
  'SCHOOL', 'MUNICIPALITY', 'COMPANY', 'NGO', 'RESEARCH_INSTITUTE', 'STARTUP'
]);

export const OrganizationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: OrganizationTypeSchema,
  identityId: z.string().uuid()
});

export const ProductLifecycleStateSchema = z.enum([
  'IDEA', 'PROTOTYPE', 'VALIDATED', 'PILOT', 'PRODUCTION', 'LICENSED', 'ACTIVE', 'RETIRED'
]);

export const ProductSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  name: z.string(),
  problemSolved: z.string(),
  targetCustomer: z.string(),
  lifecycleState: ProductLifecycleStateSchema,
  impactMetrics: z.array(z.string())
});

export const OfferingSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  offeringType: z.enum(['SAAS', 'API', 'ENTERPRISE_LICENSE', 'WHITE_LABEL', 'TRAINING', 'SOURCE_CODE', 'CONSULTING', 'DATA']),
  name: z.string(),
  isActive: z.boolean()
});

export const CommercialReadinessSchema = z.object({
  productId: z.string().uuid(),
  engineeringScore: z.number().min(0).max(100),
  marketScore: z.number().min(0).max(100),
  operationalScore: z.number().min(0).max(100),
  legalScore: z.number().min(0).max(100),
  financialScore: z.number().min(0).max(100),
  overallScore: z.number().min(0).max(100)
});

export const InvestmentProfileSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  pitchDeckUrl: z.string().url(),
  businessModel: z.string(),
  traction: z.string(),
  revenue: z.number(),
  marketSize: z.number(),
  ipStatus: z.string(),
  riskAnalysis: z.string()
});
