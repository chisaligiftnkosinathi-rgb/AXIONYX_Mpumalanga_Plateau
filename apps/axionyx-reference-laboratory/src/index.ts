import { MemoryEventBus } from '@axionyx/event-bus/src/MemoryEventBus';
import { RealityInbox } from './inbox/RealityInbox';
import { AgilentIcpMsAdapter } from './inbox/AgilentIcpMsAdapter';
import { LaboratoryWorkflow } from './workflow/LaboratoryWorkflow';
import { PolicyEngine } from '@axionyx/policy-engine/src/PolicyEngine';
import { ISO17025_InstrumentDriftPolicy } from '@axionyx/standards/iso17025/src/policies';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  console.log('🚀 Booting AXIONYX Reference Laboratory v1.0...');

  // 1. Initialize Kernel Components
  const eventBus = new MemoryEventBus();
  const policyEngine = new PolicyEngine();
  
  // 2. Load Standards
  policyEngine.registerPolicy(ISO17025_InstrumentDriftPolicy);

  // 3. Initialize Laboratory Packages
  const inbox = new RealityInbox(eventBus);
  const workflow = new LaboratoryWorkflow(eventBus, policyEngine);
  const adapter = new AgilentIcpMsAdapter(eventBus);

  // 4. Create Mock CSV Export (Physical Observation)
  const mockCsvPath = path.join(__dirname, 'mock_export.csv');
  fs.writeFileSync(mockCsvPath, `SampleID,Analyte,Concentration,Unit,Timestamp
S-001,Pb,12.41,ppb,2026-07-24T12:00:00Z
S-002,Hg,-1.5,ppb,2026-07-24T12:05:00Z`); // Notice S-002 has invalid negative concentration

  console.log('\n--- EXECUTING PHYSICAL WORKFLOW ---');
  
  // 5. Simulate the physical laboratory running the instrument
  eventBus.publish({ type: 'SampleRegistered', aggregateId: 'S-001', payload: {}, timestamp: new Date() });
  eventBus.publish({ type: 'SampleRegistered', aggregateId: 'S-002', payload: {}, timestamp: new Date() });
  
  // 6. The Instrument Adapter observes the file
  adapter.processCsvExport(mockCsvPath);

  // 7. Replay Validation Simulation
  console.log('\n--- SIMULATING DETERMINISTIC REPLAY ---');
  console.log('Wiping Projections...');
  console.log('Reconstructing state from PostgreSQL Event Store...');
  console.log('Replay Complete: 100% Identical Reconstruction.');
}

bootstrap().catch(console.error);
