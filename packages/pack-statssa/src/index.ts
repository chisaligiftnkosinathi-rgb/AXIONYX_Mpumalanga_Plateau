import { KnowledgePack } from '@axionyx/knowledge-graph-engine';
import * as fs from 'fs';
import * as path from 'path';

const manifestPath = path.join(__dirname, '../pack.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const temporal = { valid_from: null, valid_until: null, effective_date: null, publication_date: null };

export const statssaPack: KnowledgePack = {
  manifest,
  nodes: [
    { id: 'auth-statssa', type: 'Organisation', name: 'Statistics South Africa', description: 'Stats SA', temporal },
    { id: 'dataset-census-2022', type: 'Dataset', name: 'Census 2022', description: 'National Population and Housing Census 2022', temporal },
    { id: 'series-pop-2022', type: 'Series', name: 'Population', description: 'Population Count', temporal },
    { id: 'unit-people', type: 'Unit', name: 'People', description: 'Count of individuals', temporal },
    { id: 'stat-obs-ema-pop', type: 'StatisticalObservation', name: 'Population = 530,617', description: 'Observation for eMalahleni 2022', temporal, metadata: { value: 530617, period: '2022' } }
  ],
  edges: [
    // Authority -> Dataset -> Series
    { id: 'edge-auth-dataset', sourceId: 'auth-statssa', targetId: 'dataset-census-2022', type: 'publishes', temporal },
    { id: 'edge-dataset-series', sourceId: 'dataset-census-2022', targetId: 'series-pop-2022', type: 'contains', temporal },
    
    // Series -> Unit
    { id: 'edge-series-unit', sourceId: 'series-pop-2022', targetId: 'unit-people', type: 'measured_in', temporal },
    
    // Series -> StatisticalObservation
    { id: 'edge-series-statobs', sourceId: 'series-pop-2022', targetId: 'stat-obs-ema-pop', type: 'contains', temporal }, // using 'contains' for simplicity

    // StatisticalObservation -> Boundary
    { id: 'edge-statobs-geo', sourceId: 'stat-obs-ema-pop', targetId: 'geo-muni-emalahleni', type: 'located_in', temporal }
  ]
};
