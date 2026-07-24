// AXIONYX Core Domain Entities

export enum WorkspaceRole {
  OWNER = 'OWNER',
  CONTRIBUTOR = 'CONTRIBUTOR',
  MENTOR = 'MENTOR',
  REVIEWER = 'REVIEWER',
  CUSTOMER = 'CUSTOMER'
}

export interface Identity {
  id: string;
  name: string;
  roles: string[];
  capabilities: string[];
  createdAt: Date;
}

export interface Mission {
  id: string;
  ownerId: string;
  domain: string;
  problem: string;
  objective: string;
  status: 'DISCOVERY' | 'ACTIVE' | 'ACHIEVED';
}

export interface Capability {
  id: string;
  name: string;
  level: 'EXPLORER' | 'BUILDER' | 'ENGINEER' | 'CREATOR';
  evidenceIds: string[];
}

export interface Project {
  id: string;
  missionId: string;
  contributors: string[];
  status: 'IDEA' | 'BUILDING' | 'VALIDATING' | 'DEPLOYED' | 'LICENSED';
}

export interface Artifact {
  id: string;
  projectId: string;
  type: 'APPLICATION' | 'MODEL' | 'DOCUMENT' | 'RESEARCH' | 'VIDEO';
  location: string;
  version: string;
  createdAt: Date;
}

export interface Evidence {
  id: string;
  artifactId: string;
  type: 'DEPLOYMENT' | 'CUSTOMER_FEEDBACK' | 'METRIC' | 'CODE';
  artifactUrl: string;
  validationStatus: 'PENDING' | 'VALIDATED';
  timestamp: Date;
}

export interface PortfolioEntry {
  id: string;
  ownerId: string;
  artifactId: string;
  visibility: 'PUBLIC' | 'PRIVATE' | 'ECOSYSTEM_ONLY';
  description: string;
}

export interface IPAsset {
  id: string;
  creatorId: string;
  ownershipModel: {
    creatorPercentage: number;
    ecosystemPercentage: number;
  };
  licenseStatus: 'UNLICENSED' | 'COMMERCIAL' | 'OPEN_SOURCE';
}

export interface RevenueEvent {
  id: string;
  assetId: string;
  amount: number;
  distribution: {
    creatorAmount: number;
    ecosystemAmount: number;
  };
  timestamp: Date;
}

// AXIONYX Phase 2: Academy & Mentorship Entities

export enum LearnerState {
  APPLIED = 'APPLIED',
  REGISTERED = 'REGISTERED',
  EXPLORER = 'EXPLORER',
  BUILDER = 'BUILDER',
  REVIEW_PENDING = 'REVIEW_PENDING',
  ENGINEER = 'ENGINEER',
  CREATOR = 'CREATOR',
  GRADUATE = 'GRADUATE'
}

export interface Program {
  id: string;
  name: string;
  durationMonths: number;
}

export interface Module {
  id: string;
  programId: string;
  name: string;
  durationWeeks: number;
  targetCapabilities: string[];
}

export interface LearningPath {
  id: string;
  programId: string;
  sequence: string[];
}

export interface Challenge {
  id: string;
  moduleId: string;
  title: string;
  domain: string;
  requiredCapabilityLevel: string;
  evidenceRequirements: string[];
}

export interface MentorProfile {
  id: string;
  identityId: string;
  domainExpertise: string[];
  yearsExperience: number;
  verifiedCapabilities: string[];
  availability: 'AVAILABLE' | 'AT_CAPACITY' | 'OFFLINE';
}

// AXIONYX Phase 2.5: Intelligence & Capability Graph Entities

export interface KnowledgeNode {
  id: string;
  concept: string;
  domain: string;
  prerequisites: string[];
  relatedCapabilities: string[];
  resources: string[];
}

export interface CapabilityNode {
  id: string;
  capabilityName: string;
  requiredKnowledgeNodes: string[];
  requiredEvidenceTypes: string[];
  baseLevel: string;
}

export interface Team {
  id: string;
  missionId: string;
  name: string;
  members: string[]; // array of Identity IDs
  projects: string[]; // array of Project IDs
}

export interface AcademyMetric {
  id: string;
  metricType: 'CAPABILITY_CREATED' | 'SOLUTION_BUILT' | 'EVIDENCE_GENERATED' | 'PROJECT_DEPLOYED' | 'TEAM_FORMED' | 'IP_CREATED' | 'REVENUE_GENERATED' | 'COMMUNITY_IMPACT';
  value: number;
  actorId: string;
  timestamp: Date;
}

export interface AIMemoryContext {
  id: string;
  identityId: string;
  currentMissionId: string;
  currentProjectId: string;
  currentCapabilityLevel: string;
  historicalContext: string;
}

// AXIONYX Phase 3: Commercial Engine Entities

export enum OrganizationType {
  SCHOOL = 'SCHOOL',
  MUNICIPALITY = 'MUNICIPALITY',
  COMPANY = 'COMPANY',
  NGO = 'NGO',
  RESEARCH_INSTITUTE = 'RESEARCH_INSTITUTE',
  STARTUP = 'STARTUP'
}

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  identityId: string; // The root identity managing the org
}

export enum ProductLifecycleState {
  IDEA = 'IDEA',
  PROTOTYPE = 'PROTOTYPE',
  VALIDATED = 'VALIDATED',
  PILOT = 'PILOT',
  PRODUCTION = 'PRODUCTION',
  LICENSED = 'LICENSED',
  ACTIVE = 'ACTIVE',
  RETIRED = 'RETIRED'
}

export interface Product {
  id: string;
  projectId: string;
  name: string;
  problemSolved: string;
  targetCustomer: string;
  lifecycleState: ProductLifecycleState;
  impactMetrics: string[];
}

export interface Offering {
  id: string;
  productId: string;
  offeringType: 'SAAS' | 'API' | 'ENTERPRISE_LICENSE' | 'WHITE_LABEL' | 'TRAINING' | 'SOURCE_CODE' | 'CONSULTING' | 'DATA';
  name: string;
  isActive: boolean;
}

export interface CommercialReadiness {
  productId: string;
  engineeringScore: number;
  marketScore: number;
  operationalScore: number;
  legalScore: number;
  financialScore: number;
  overallScore: number;
}

export interface InvestmentProfile {
  id: string;
  productId: string;
  pitchDeckUrl: string;
  businessModel: string;
  traction: string;
  revenue: number;
  marketSize: number;
  ipStatus: string;
  riskAnalysis: string;
}

export interface RevenueEventCommercial {
  id: string;
  offeringId: string;
  customerId: string; // Identity or Organization ID
  amount: number;
  creatorShare: number;
  axionyxShare: number;
  timestamp: Date;
}
