// AXIONYX PUBLIC INFRASTRUCTURE FOR KNOWLEDGE
// packages/digital-twin-registry/src/models/earth-v1/water-energy-loop.ts

export const EarthWaterEnergyLoop = {
  id: 'earth-water-energy-loop-v1',
  name: 'Earth Water-Energy Loop',
  description: 'The foundation of the Earth Digital Twin, integrating Physics, Chemistry, Climate, Energy, and Economics.',
  components: [
    'Sun',
    'SolarEnergy',
    'Evaporation',
    'CloudFormation',
    'Rain',
    'River',
    'HydroelectricEnergy',
    'HumanEconomy'
  ],
  linkages: [
    { from: 'Sun', to: 'SolarEnergy', type: 'Energy_Transfer' },
    { from: 'SolarEnergy', to: 'Evaporation', type: 'State_Change' },
    { from: 'Evaporation', to: 'CloudFormation', type: 'Condensation' },
    { from: 'CloudFormation', to: 'Rain', type: 'Precipitation' },
    { from: 'Rain', to: 'River', type: 'Accumulation' },
    { from: 'River', to: 'HydroelectricEnergy', type: 'Kinetic_Conversion' },
    { from: 'HydroelectricEnergy', to: 'HumanEconomy', type: 'Economic_Utility' }
  ]
};
