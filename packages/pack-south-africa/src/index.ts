import { KnowledgePack } from '@axionyx/knowledge-graph-engine';
import * as fs from 'fs';
import * as path from 'path';

const manifestPath = path.join(__dirname, '../pack.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const temporal = { valid_from: null, valid_until: null, effective_date: null, publication_date: null };

export const saPack: KnowledgePack = {
  manifest,
  nodes: [
    { id: 'sa-vision-ndp2030', type: 'Vision', name: 'NDP 2030', description: 'Eliminate poverty and reduce inequality by 2030', temporal },
    { id: 'sa-goal-infrastructure', type: 'Goal', name: 'Infrastructure Goal', description: 'Invest in economic infrastructure', temporal },
    { id: 'sa-dept-national-planning', type: 'Organisation', name: 'National Planning Commission', description: 'NPC', temporal }
  ],
  edges: [
    { id: 'edge-sa-goal-vision', sourceId: 'sa-goal-infrastructure', targetId: 'sa-vision-ndp2030', type: 'fulfills', temporal },
    { id: 'edge-sa-dept-vision', sourceId: 'sa-dept-national-planning', targetId: 'sa-vision-ndp2030', type: 'owns', temporal }
  ]
};
