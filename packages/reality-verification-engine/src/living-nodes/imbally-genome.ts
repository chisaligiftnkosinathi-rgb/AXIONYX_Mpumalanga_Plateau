export interface CapabilitySteward {
  name: string;
  contributions: string[];
  evidence: string[];
}

export interface ImballyGenome {
  nodeId: string;
  location: string;
  parent: string;
  stewards: CapabilitySteward[];
  physicalCapability: string[];
  scientificCapability: string[];
  humanCapability: string[];
  digitalCapability: string[];
  mobilityCapability: string[];
  emergentCapability: string[];
}

export const CURRENT_IMBALLY_GENOME: ImballyGenome = {
  nodeId: 'imbally-ermelo',
  location: 'Ermelo, Mpumalanga',
  parent: 'Global IT and Business Solutions (Pty) Ltd',
  stewards: [
    {
      name: 'Mbali Fortunatee Mokwena',
      contributions: ['Business Administration', 'Metallurgical Science'],
      evidence: ['MBA - Business Administration', 'Honours - Metallurgy']
    }
  ],
  physicalCapability: [
    'Mining knowledge',
    'Coal processing',
    'Laboratory operations'
  ],
  scientificCapability: [
    'Analytical chemistry',
    'Chemical engineering',
    'Metallurgy'
  ],
  humanCapability: [
    'Scientists',
    'Safety professionals',
    'HR systems',
    'Mentorship'
  ],
  digitalCapability: [
    'Data systems',
    'Knowledge management',
    'Industrial intelligence (AXIONYX)'
  ],
  mobilityCapability: [
    'Mechanical engineering',
    'Commercial vehicle repair',
    'MG Autobody PanelBeat'
  ],
  emergentCapability: [
    'Self-learning industrial node',
    'Regional capability nucleus'
  ]
};
