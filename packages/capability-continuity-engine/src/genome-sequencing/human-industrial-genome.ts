export interface GenomeNode {
  id: string;
  name: string;
  type: 'Genesis' | 'Digital' | 'Human' | 'Industrial' | 'Mobility' | 'ExternalGraft' | 'MeaningLayer' | 'ObservationLayer';
  parentIds: string[];
  capabilities: string[];
}

export const AXIONYX_GENOME_TREE: GenomeNode[] = [
  {
    id: 'siphanda_phansi',
    name: 'Siphanda Phansi CC',
    type: 'Genesis',
    parentIds: [],
    capabilities: ['Entrepreneurial Memory', 'Problem-Solving Patterns', 'Vision']
  },
  {
    id: 'global_it',
    name: 'Global IT and Business Solutions',
    type: 'Digital',
    parentIds: ['siphanda_phansi'],
    capabilities: ['Digital Coordination', 'Systems', 'Data']
  },
  {
    id: 'siyaphakamisa',
    name: 'Siyaphakamisa Business Solutions',
    type: 'Human',
    parentIds: ['siphanda_phansi'],
    capabilities: ['People', 'Relationships', 'Business Development']
  },
  {
    id: 'imbally_node',
    name: 'Imbally Industrial Node',
    type: 'Industrial',
    parentIds: ['siphanda_phansi'],
    capabilities: ['Coal Chemistry', 'Testing', 'Beneficiation', 'Energy Systems']
  },
  {
    id: 'mg_autobody',
    name: 'MG Autobody Panelbeat',
    type: 'Mobility',
    parentIds: ['siphanda_phansi'],
    capabilities: ['Mobility Resilience', 'Vehicle Maintenance']
  },
  {
    id: 'iphande',
    name: 'iPhande (Capability Observation)',
    type: 'ObservationLayer',
    parentIds: ['global_it'],
    capabilities: ['Capability Discovery', 'Self-Awareness']
  },
  {
    id: 'nokuthula_eng',
    name: 'Nokuthula Engineering (Lwa Bantu / Noks Eight)',
    type: 'ExternalGraft',
    parentIds: ['global_it'], // Merged via Bolt Trip
    capabilities: ['Engineering', 'Trading', 'Institutional Learning (SARS)']
  },
  {
    id: 'axionyx',
    name: 'AXIONYX (Capability OS)',
    type: 'MeaningLayer',
    parentIds: ['global_it', 'siyaphakamisa', 'imbally_node', 'mg_autobody', 'iphande', 'nokuthula_eng'],
    capabilities: ['Meaning Creation', 'Systemic Coordination', 'Transformation Infrastructure']
  }
];
