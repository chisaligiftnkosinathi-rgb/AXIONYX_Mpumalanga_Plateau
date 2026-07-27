export interface TwinEcosystemNode {
  id: string;
  name: string;
  capabilityType: 'Matter' | 'Process' | 'Energy' | 'Evidence' | 'Enterprise' | 'Mobility' | 'Digital';
  creationYear: number;
  connections: string[];
}

export const ImballyTwinNodes: TwinEcosystemNode[] = [
  { id: 'coal_mine', name: 'Vaalbult Colliery', capabilityType: 'Matter', creationYear: 1, connections: [] },
  { id: 'exxaro', name: 'Exxaro Belfast', capabilityType: 'Process', creationYear: 3, connections: ['coal_mine'] },
  { id: 'kendal', name: 'Kendal Power Station', capabilityType: 'Energy', creationYear: 5, connections: ['coal_mine', 'exxaro'] },
  { id: 'sibonisiwe', name: 'Sibonisiwe Lab', capabilityType: 'Evidence', creationYear: 6, connections: ['coal_mine', 'exxaro', 'kendal'] },
  { id: 'imbally_biz', name: 'Imbally Node (Mbali Mokwena)', capabilityType: 'Enterprise', creationYear: 8, connections: ['sibonisiwe'] },
  { id: 'mg_autobody', name: 'MG Autobody', capabilityType: 'Mobility', creationYear: 9, connections: ['imbally_biz'] },
  { id: 'axionyx', name: 'AXIONYX Digital', capabilityType: 'Digital', creationYear: 10, connections: ['sibonisiwe', 'imbally_biz', 'mg_autobody', 'coal_mine', 'exxaro', 'kendal'] }
];
