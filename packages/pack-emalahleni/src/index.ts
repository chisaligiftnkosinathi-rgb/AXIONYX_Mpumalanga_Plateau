import { KnowledgePack } from '@axionyx/knowledge-graph-engine';
import * as fs from 'fs';
import * as path from 'path';

const manifestPath = path.join(__dirname, '../pack.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const temporal = { valid_from: null, valid_until: null, effective_date: null, publication_date: null };

export const emalahleniPack: KnowledgePack = {
  manifest,
  nodes: [
    { id: 'ema-programme-infrastructure', type: 'Programme', name: 'eMalahleni Infrastructure Renewal', description: 'Municipal programme for road rehabilitation', temporal },
    { id: 'ema-project-n4-upgrade', type: 'Project', name: 'N4 Upgrade Project', description: 'Resurfacing N4 segment', temporal, metadata: { budget: 100 } },
    { id: 'ema-asset-n4-segment', type: 'Asset', name: 'N4 Road Segment', description: 'eMalahleni central bypass', temporal },
    { id: 'ema-obs-asphalt-test', type: 'Observation', name: 'Lab asphalt compression test', description: 'Test #A-9923', temporal },
    { id: 'ema-verif-sanas', type: 'Verification', name: 'SANAS-accredited method', description: 'Verification by certified engineer', temporal },
    { id: 'ema-evidence-qa-pass', type: 'Evidence', name: 'QA pass certificate', description: 'Certificate of completion', temporal, metadata: { confidence: 'VERIFIED', dimensionCategory: 'Construction Quality' } },
    
    // Conflicting Operational Evidence
    { id: 'ema-obs-citizen', type: 'Observation', name: 'Citizen pothole report', description: 'Photo + GPS of road damage', temporal },
    { id: 'ema-verif-community', type: 'Verification', name: 'Community Ward Verification', description: 'Verified by local committee', temporal },
    { id: 'ema-evidence-damage', type: 'Evidence', name: 'Verified Road Damage', description: 'Surface deterioration', temporal, metadata: { confidence: 'HIGH', dimensionCategory: 'Performance' } },

    // Reasoning Nodes
    { id: 'ema-claim-good-condition', type: 'Claim', name: 'The eMalahleni N4 road segment is in good condition', description: 'Operational claim', temporal },
    
    // Actors and Identity Nodes
    { id: 'actor-citizen-1', type: 'Actor', name: 'Citizen Alice', description: 'Resident of eMalahleni Ward 4', temporal },
    { id: 'actor-citizen-2', type: 'Actor', name: 'Citizen Bob', description: 'Resident of eMalahleni Ward 12', temporal },
    { id: 'identity-alice-digital', type: 'Identity', name: 'Alice Gov ID', description: 'National Digital Identity', temporal },
    { id: 'identity-bob-digital', type: 'Identity', name: 'Bob Gov ID', description: 'National Digital Identity', temporal },
    { id: 'credential-alice-verified', type: 'Credential', name: 'Verified Citizen Credential', description: 'Proof of residence and identity', temporal },
    { id: 'credential-bob-verified', type: 'Credential', name: 'Verified Citizen Credential', description: 'Proof of residence and identity', temporal },
    { id: 'auth-home-affairs', type: 'Authority', name: 'Department of Home Affairs', description: 'National Identity Issuer', temporal }
  ],
  edges: [
    // External link to Mpumalanga target
    { id: 'edge-ema-prog-target', sourceId: 'ema-programme-infrastructure', targetId: 'mpu-target-roads-good', type: 'measured_by', temporal },

    // Internal linkages
    { id: 'edge-project-prog', sourceId: 'ema-programme-infrastructure', targetId: 'ema-project-n4-upgrade', type: 'owns', temporal },
    { id: 'edge-asset-project', sourceId: 'ema-project-n4-upgrade', targetId: 'ema-asset-n4-segment', type: 'produces', temporal },
    
    // The observation -> verification -> evidence chain
    { id: 'edge-obs-asset', sourceId: 'ema-obs-asphalt-test', targetId: 'ema-asset-n4-segment', type: 'generates', temporal },
    { id: 'edge-verif-obs', sourceId: 'ema-verif-sanas', targetId: 'ema-obs-asphalt-test', type: 'verifies', temporal },
    { id: 'edge-evidence-verif', sourceId: 'ema-evidence-qa-pass', targetId: 'ema-verif-sanas', type: 'derived_from', temporal },
    
    // The asset formally linked to the evidence
    { id: 'edge-asset-evidence', sourceId: 'ema-asset-n4-segment', targetId: 'ema-evidence-qa-pass', type: 'evidenced_by', temporal },
    { id: 'edge-asset-evidence-damage', sourceId: 'ema-asset-n4-segment', targetId: 'ema-evidence-damage', type: 'evidenced_by', temporal },

    // The asset structurally linked to the Canonical Reference Geography
    { id: 'edge-asset-geo', sourceId: 'ema-asset-n4-segment', targetId: 'geo-main-emalahleni', type: 'located_in', temporal },

    // Conflicting operational verification chain
    { id: 'edge-obs-citizen-asset', sourceId: 'ema-obs-citizen', targetId: 'ema-asset-n4-segment', type: 'generates', temporal },
    { id: 'edge-verif-citizen', sourceId: 'ema-verif-community', targetId: 'ema-obs-citizen', type: 'verifies', temporal },
    { id: 'edge-evidence-citizen-verif', sourceId: 'ema-evidence-damage', targetId: 'ema-verif-community', type: 'derived_from', temporal },

    // Reasoning Edges
    { id: 'edge-claim-support', sourceId: 'ema-claim-good-condition', targetId: 'ema-evidence-qa-pass', type: 'supported_by', temporal },
    { id: 'edge-claim-contradict', sourceId: 'ema-claim-good-condition', targetId: 'ema-evidence-damage', type: 'contradicted_by', temporal },

    // Trust Edges
    { id: 'edge-auth-alice', sourceId: 'actor-citizen-1', targetId: 'identity-alice-digital', type: 'authenticated_as', temporal },
    { id: 'edge-auth-bob', sourceId: 'actor-citizen-2', targetId: 'identity-bob-digital', type: 'authenticated_as', temporal },
    { id: 'edge-cred-alice', sourceId: 'identity-alice-digital', targetId: 'credential-alice-verified', type: 'verified_by', temporal },
    { id: 'edge-cred-bob', sourceId: 'identity-bob-digital', targetId: 'credential-bob-verified', type: 'verified_by', temporal },
    { id: 'edge-issue-alice', sourceId: 'credential-alice-verified', targetId: 'auth-home-affairs', type: 'issued_by', temporal },
    { id: 'edge-issue-bob', sourceId: 'credential-bob-verified', targetId: 'auth-home-affairs', type: 'issued_by', temporal }
  ]
};
