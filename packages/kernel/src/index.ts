import type { Project, IPAsset, Evidence, RevenueEvent } from "@axionyx/domain";

/**
 * Ecosystem rules governing the AXIONYX life cycle.
 */

export function CanProjectGraduate(project: Project, evidenceRecords: Evidence[]): boolean {
  if (project.status !== 'PRODUCTION' && project.status !== 'LICENSED') return false;
  
  const hasValidatedEvidence = evidenceRecords.some(e => e.validationStatus === 'VALIDATED');
  return hasValidatedEvidence;
}

export function CanLicenseAsset(project: Project): boolean {
  return project.status === 'PRODUCTION' || project.status === 'LICENSED';
}

export function CalculateRoyalty(grossRevenue: number): RevenueEvent['distribution'] {
  return {
    creatorAmount: grossRevenue * 0.70,
    ecosystemAmount: grossRevenue * 0.30
  };
}

export function ValidateEvidence(evidence: Evidence): boolean {
  // Logic to determine if evidence meets required capability thresholds
  return evidence.artifactUrl.length > 0;
}
