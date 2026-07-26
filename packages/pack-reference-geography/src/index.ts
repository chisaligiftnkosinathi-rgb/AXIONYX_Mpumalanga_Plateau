import { KnowledgePack } from '@axionyx/knowledge-graph-engine';
import * as fs from 'fs';
import * as path from 'path';

const manifestPath = path.join(__dirname, '../pack.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const temporal = { valid_from: null, valid_until: null, effective_date: null, publication_date: null };

export const geographyPack: KnowledgePack = {
  manifest,
  nodes: [
    { id: 'geo-prov-mpumalanga', type: 'Boundary', name: 'Mpumalanga', description: 'Province', temporal },
    { id: 'geo-dist-nkangala', type: 'Boundary', name: 'Nkangala', description: 'District Municipality', temporal },
    { id: 'geo-muni-emalahleni', type: 'Boundary', name: 'eMalahleni', description: 'Local Municipality', temporal },
    { id: 'geo-main-emalahleni', type: 'Boundary', name: 'eMalahleni Main Place', description: 'Main Place', temporal }
  ],
  edges: [
    { id: 'edge-geo-main-muni', sourceId: 'geo-main-emalahleni', targetId: 'geo-muni-emalahleni', type: 'located_in', temporal },
    { id: 'edge-geo-muni-dist', sourceId: 'geo-muni-emalahleni', targetId: 'geo-dist-nkangala', type: 'located_in', temporal },
    { id: 'edge-geo-dist-prov', sourceId: 'geo-dist-nkangala', targetId: 'geo-prov-mpumalanga', type: 'located_in', temporal }
  ]
};
