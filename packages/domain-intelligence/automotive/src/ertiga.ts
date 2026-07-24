import { EngineeringModel, EntityType, RelationshipType, ComponentKnowledge } from '../../core/src';

export const suzukiErtigaGraph: EngineeringModel = {
  entities: [
    {
      id: 'comp-bumper-cover',
      type: EntityType.COMPONENT,
      name: 'Front Bumper Cover',
      description: 'Aesthetic plastic cover absorbing minor impacts.',
      purpose: 'Aerodynamics, aesthetics, pedestrian safety, and minor impact absorption.',
      function: 'Deflects air, absorbs low-speed impacts (<5km/h), mounts sensors.',
      material: 'ABS Plastic / Polypropylene (PP)',
      manufacturingProcess: 'Injection Moulding',
      fasteners: '10mm Bolts, Plastic Retainer Clips',
      finish: 'Body Colour Paint',
      torqueSpecifications: { 'Mounting Bolts': '10 Nm' },
      failureModes: ['Cracking', 'Deformation', 'Paint Scuffing', 'Clip Breakage'],
      symptoms: ['Visual damage', 'Misalignment', 'Rattling'],
      safetyCritical: false
    } as ComponentKnowledge,
    {
      id: 'comp-crash-bar',
      type: EntityType.COMPONENT,
      name: 'Front Crash Bar (Reinforcement)',
      description: 'High-strength steel bar behind the bumper cover.',
      purpose: 'Absorb and distribute major impact energy to the chassis rails.',
      function: 'Structural integrity during frontal collision.',
      material: 'Ultra-High-Strength Steel (UHSS)',
      manufacturingProcess: 'Stamping and Welding',
      fasteners: 'M12 Grade 10.9 Bolts',
      finish: 'E-Coat Anti-Corrosion',
      torqueSpecifications: { 'Chassis Mounting Bolts': '110 Nm' },
      failureModes: ['Yielding', 'Bending', 'Weld Failure'],
      symptoms: ['Severe frontal deformation', 'Frame rail misalignment'],
      safetyCritical: true
    } as ComponentKnowledge,
    {
      id: 'comp-front-radar',
      type: EntityType.COMPONENT,
      name: 'Front Radar Sensor',
      description: 'Millimeter-wave radar for collision avoidance.',
      purpose: 'Detect distance to objects ahead for emergency braking.',
      function: 'Emits and receives RF waves to calculate range and velocity.',
      calibrationSpecifications: 'Requires static ADAS target calibration at 3m distance.',
      failureModes: ['Internal Hardware Failure', 'Bracket Misalignment', 'Lens Blockage'],
      symptoms: ['AEB Warning Light', 'Cruise Control Disabled'],
      safetyCritical: true
    } as ComponentKnowledge,
  ],
  relationships: [
    { sourceId: 'comp-bumper-cover', targetId: 'comp-crash-bar', relationshipType: RelationshipType.PROTECTS },
    { sourceId: 'comp-crash-bar', targetId: 'comp-bumper-cover', relationshipType: RelationshipType.PROTECTED_BY },
    { sourceId: 'comp-bumper-cover', targetId: 'comp-front-radar', relationshipType: RelationshipType.PROTECTS },
    { sourceId: 'comp-front-radar', targetId: 'comp-bumper-cover', relationshipType: RelationshipType.PROTECTED_BY },
    { sourceId: 'comp-front-radar', targetId: 'comp-crash-bar', relationshipType: RelationshipType.SUPPORTED_BY }
  ]
};
