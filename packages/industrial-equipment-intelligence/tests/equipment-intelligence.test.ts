import { StandardsTranslator } from '../src/standards/standards-translator';
import { DesignRecord } from '../src/design/design-record';
import { VerificationEngine } from '../src/verification/verification-engine';
import { ComplianceChecker } from '../src/verification/compliance-checker';
import { EquipmentReality } from '../src/schemas/equipment-event.schema';

describe('AXIONYX Industrial Equipment Intelligence Validation', () => {
  it('translates standards, records design decisions, and verifies evidence without false certification claims', () => {
    const reality: EquipmentReality = {
      reality_id: "TEST-EQUIP-001",
      equipment: { name: "Test Furnace", type: "muffle_furnace", application: "ash" },
      standard_requirements: [{ standard: "ISO 1171", requirement: "controlled heating process" }],
      design_events: [
        { id: "1", event: "design_decision_recorded", decision: "Use ceramic", evidence: ["sim_1"] },
        { id: "2", event: "verification_completed", evidence: ["thermal_stability_passed"] }
      ]
    };

    const reqs = StandardsTranslator.translate(reality.standard_requirements[0]);
    expect(reqs.length).toBeGreaterThan(0);

    const ddrs = DesignRecord.extractDDRs(reality.design_events);
    expect(ddrs.length).toBe(1);
    expect(ddrs[0].decision).toBe("Use ceramic");

    const verif = VerificationEngine.verify(reality, 'Temperature control', 'thermal_stability');
    expect(verif.evidence_found).toBe(true);
    expect(verif.verification_state).toBe('SUPPORTED');

    const report = ComplianceChecker.generateComplianceReport('ISO 1171', [verif]);
    expect(report).toContain('Designed for compliance ≠ Certified compliance');

    // Test rejection of unsupported claims
    const badVerif = VerificationEngine.verify(reality, 'Noise control', 'acoustic_test');
    expect(badVerif.verification_state).toBe('UNSUPPORTED');
    const badReport = ComplianceChecker.generateComplianceReport('ISO 1171', [verif, badVerif]);
    expect(badReport).toContain('CANNOT be verified');
  });
});
