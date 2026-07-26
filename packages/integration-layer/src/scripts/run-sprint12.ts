import { CartrackAdapter, CartrackPayload } from '../adapters/cartrack.adapter';
import { OSKernelPipeline } from '../../../engineering-os-kernel/src/core/pipeline';
import { Policy, Evidence } from '../../../engineering-os-kernel/src/schemas/primitives.schema';

async function runVerticalSlice() {
  console.log("===========================================================");
  console.log(" AXIONYX SPRINT 12: PROOF OF KERNEL - STEWARDSHIP TWIN     ");
  console.log("===========================================================\n");

  // 1. Initialize Kernel and Adapter
  const kernel = new OSKernelPipeline();
  const cartrackAdapter = new CartrackAdapter();

  // 2. Define a Governance Policy (e.g. Mine Site Speed Limit)
  const safetyPolicy: Policy = {
    id: 'pol_speed_limit_01',
    name: 'Maximum Safe Operating Speed (Mine Site)',
    domain: 'vehicle',
    evaluate: (state, evidence) => {
      // If speed exceeds 40km/h on site, it's a violation
      const speed = state.metrics.speed as number;
      return speed <= 40;
    }
  };

  kernel.registerPolicy(safetyPolicy);

  // 3. Simulate a physical event (Cartrack telemetry payload)
  const mockPayload: CartrackPayload = {
    vehicle_id: 'TRK-9002',
    timestamp: new Date().toISOString(),
    gps: { lat: -26.2041, lng: 28.0473 },
    speed_kmh: 65, // Exceeds the 40km/h limit!
    odometer_km: 12450,
    engine_temp_c: 90
  };

  // 4. Adapter Normalizes & Maps Evidence
  const event = cartrackAdapter.normaliser.normalise(mockPayload);
  const evidenceIds = cartrackAdapter.evidenceMapper.mapToEvidenceGraph(mockPayload);
  const twinUpdate = cartrackAdapter.ingest(mockPayload);

  // 5. Generate Cryptographic Evidence (mocked for proof)
  const evidence: Evidence = {
    id: evidenceIds[0],
    eventId: event.id,
    timestamp: new Date().toISOString(),
    hash: Buffer.from(JSON.stringify(mockPayload)).toString('base64'),
    signature: 'crypto_sig_abc123',
    verified: true
  };

  // 6. Push to Kernel Pipeline (The Unbroken Chain)
  kernel.execute(event, twinUpdate, evidence);
}

runVerticalSlice();
