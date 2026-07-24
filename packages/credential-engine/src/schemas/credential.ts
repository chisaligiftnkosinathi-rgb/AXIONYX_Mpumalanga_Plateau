// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/credential-engine/src/schemas/credential.ts

import { CapabilityProfile } from '../../../competency-engine/src/schemas/capability';

export type CredentialFormat = 'OpenBadge' | 'VerifiableCredential' | 'PDF' | 'JSON-LD';

export interface PublishedCredential {
  id: string;             // Unique cryptographic identifier
  issuedTo: string;       // Actor ID
  issuedBy: string;       // e.g., "AXIONYX Academy" or "AXIONYX Laboratory"
  issueDate: Date;
  expirationDate?: Date;
  
  capability: CapabilityProfile; // The verified trust object
  
  format: CredentialFormat;
  publicUrl: string;      // The URL where the provenance chain can be audited
}
