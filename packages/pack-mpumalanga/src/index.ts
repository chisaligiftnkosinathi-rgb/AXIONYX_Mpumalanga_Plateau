import { KnowledgePack } from '@axionyx/knowledge-graph-engine';
import * as fs from 'fs';
import * as path from 'path';

const manifestPath = path.join(__dirname, '../pack.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const temporal = { valid_from: null, valid_until: null, effective_date: null, publication_date: null };

export const mpumalangaPack: KnowledgePack = {
  manifest,
  nodes: [
    { id: 'mpu-strategy-pgds', type: 'Framework', name: 'Mpumalanga PGDS', description: 'Provincial Growth and Development Strategy', temporal },
    { id: 'mpu-outcome-transport', type: 'Outcome', name: 'Reliable Transport Network', description: 'Ensure safe and reliable road transport', temporal },
    { id: 'mpu-indicator-road-quality', type: 'Indicator', name: 'Road Quality Index', description: 'Measure of road structural integrity', temporal },
    { id: 'mpu-target-roads-good', type: 'Target', name: '90% roads in good condition', description: '2026 Target', temporal },
    { id: 'mpu-dept-public-works', type: 'Organisation', name: 'Mpumalanga Public Works', description: 'DPWRT', temporal }
  ],
  edges: [
    // Link to SA Pack Goal
    { id: 'edge-mpu-outcome-sa-goal', sourceId: 'mpu-outcome-transport', targetId: 'sa-goal-infrastructure', type: 'contributes_to', temporal },
    
    // Internal linkages
    { id: 'edge-indicator-outcome', sourceId: 'mpu-indicator-road-quality', targetId: 'mpu-outcome-transport', type: 'measures', temporal },
    { id: 'edge-target-indicator', sourceId: 'mpu-target-roads-good', targetId: 'mpu-indicator-road-quality', type: 'measured_by', temporal },
    { id: 'edge-pgds-outcome', sourceId: 'mpu-outcome-transport', targetId: 'mpu-strategy-pgds', type: 'aligns_with', temporal }
  ]
};
