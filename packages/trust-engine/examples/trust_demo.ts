// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/trust-engine/examples/trust_demo.ts

import { RawEvidence, VerificationEvaluation, ProvenanceChain } from '../src/schemas/trust';
import { CapabilityProfile, ActorPassport } from '../../competency-engine/src/schemas/capability';
import { PublishedCredential } from '../../credential-engine/src/schemas/credential';

console.log("===============================================================");
console.log(`AXIONYX UNIVERSAL TRUST ENGINE: CAPABILITY VERIFICATION`);
console.log("===============================================================\n");

// 1. Raw Evidence Submitted
const evidence1: RawEvidence = {
  id: 'EVID-492',
  sourceType: 'Investigation',
  content: 'Completed Investigation 001: Maize Nitrogen Deficiency',
  timestamp: new Date('2026-07-20T10:00:00Z'),
  submittedBy: 'ACTOR-GIFT-CHISALI'
};

// 2. Verification Executed by Steward
const verification: VerificationEvaluation = {
  evidenceId: evidence1.id,
  standardMatched: {
    standardId: 'AXIONYX-ACAD-101',
    clause: 'Scientific Observation',
    description: 'Accurately documents visual leaf symptoms.'
  },
  isCredible: true,
  confidenceScore: 0.94,
  reasoning: 'The student correctly identified the V-shaped necrosis pattern and isolated nitrogen deficiency from drought stress.',
  verifiedBy: 'STEWARD-BOTANY',
  verificationDate: new Date('2026-07-21T14:00:00Z')
};

// 3. The Capability Profile is Updated
const scientificObservationCapability: CapabilityProfile = {
  actorId: 'ACTOR-GIFT-CHISALI',
  capabilityId: 'CAP-OBSERVATION',
  proficiency: 'Explorer',
  confidence: verification.confidenceScore, // 0.94
  evidence: [{
    evidenceId: evidence1.id,
    type: evidence1.sourceType,
    description: evidence1.content
  }],
  verifiedBy: [{
    verifiedBy: verification.verifiedBy,
    date: verification.verificationDate,
    method: 'Peer Review',
    confidenceScore: verification.confidenceScore
  }],
  standards: [verification.standardMatched],
  lastVerified: verification.verificationDate,
  expires: new Date('2027-07-21T14:00:00Z') // Trust decays in 1 year
};

// 4. The Actor Passport is Compiled
const passport: ActorPassport = {
  actorId: 'ACTOR-GIFT-CHISALI',
  name: 'Gift Chisali',
  capabilities: [scientificObservationCapability]
};

// 5. Credential is Minted
const credential: PublishedCredential = {
  id: 'CRED-8849-XYZ',
  issuedTo: passport.actorId,
  issuedBy: 'AXIONYX Academy',
  issueDate: new Date(),
  capability: scientificObservationCapability,
  format: 'OpenBadge',
  publicUrl: 'https://axionyx.org/verify/CRED-8849-XYZ'
};

console.log(`>>> PASSPORT CAPABILITY UPDATE FOR: ${passport.name}`);
console.log(`Capability: Scientific Observation`);
console.log(`Proficiency Level: ${scientificObservationCapability.proficiency}`);
console.log(`Trust Confidence: ${scientificObservationCapability.confidence * 100}%`);
console.log(`Provenance: Verified by ${verification.verifiedBy} via ${evidence1.id}`);
console.log(`Trust Expiration: ${scientificObservationCapability.expires?.toISOString()}`);
console.log(`\n>>> CREDENTIAL MINTED: ${credential.publicUrl}`);
