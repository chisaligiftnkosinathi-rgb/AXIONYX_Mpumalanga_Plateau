import { DiagnosisEngine } from '../src/diagnosis/diagnosis-engine';
import { ExplanationEngine } from '../src/explanation/explanation-engine';
import { VehicleReality } from '../src/schemas/vehicle-event.schema';

describe('AXIONYX AI Car Doctor Validation', () => {
  it('translates telemetry into an explainable diagnosis without unsupported absolute claims', () => {
    const reality: VehicleReality = {
      reality_id: "VEHICLE-TEST-001",
      identity: { vehicle_type: "car", manufacturer: "test", model: "test", mileage_km: 100, purpose: "test" },
      events: [],
      observations: [{ measurement: "coolant_temperature_pattern", value: "above_normal_variation", confidence: "OBSERVED" }],
      evidence: ["telemetry", "history"]
    };

    const diagnosis = DiagnosisEngine.diagnose(reality);
    
    // Proving the claim firewall: no absolute black-box statements
    expect(diagnosis.possible_causes).toContain("cooling system inspection recommended");
    expect(diagnosis.confidence).toBe("MEDIUM");
    expect(diagnosis.evidence.length).toBeGreaterThan(0);

    const explanation = ExplanationEngine.explain(diagnosis);
    expect(explanation).toContain("Because:");
    expect(explanation).toContain("Temperature behaviour changed");
  });
});
