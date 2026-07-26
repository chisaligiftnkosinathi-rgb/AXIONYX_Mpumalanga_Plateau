-- Seed Data: AXIONYX_REALITY_CRYSTAL_001

INSERT INTO reality_crystals (id, name, domain, hypothesis, maturity_level, confidence_score, uncertainty_range, status)
VALUES (
    '11111111-1111-1111-1111-111111111111',
    'Mpumalanga Acid Mine Drainage Regeneration Pilot',
    'Environmental Chemistry',
    'Can targeted AMD treatment restore river health while maintaining local economic stability?',
    'C3',
    0.8200,
    '{"min": 0.75, "max": 0.89}',
    'Awaiting Field Validation'
);

INSERT INTO evidence_records (id, crystal_id, source, measurement, methodology, observer, verification_status, hash)
VALUES (
    '22222222-2222-2222-2222-222222222222',
    '11111111-1111-1111-1111-111111111111',
    'University Laboratory (Pretoria)',
    '{"metric": "pH reduction", "value": "3.2 to 6.8", "duration": "30 days"}',
    'Laboratory closed-system bioreactor simulation using local microbial consortia.',
    'Dr. S. Mokoena',
    'VERIFIED',
    'a83f92b4c10e6a9876543210fdecba98'
);

INSERT INTO uncertainty_records (crystal_id, unknown_variable, impact, status)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Long-term ecosystem adaptation', 'HIGH', 'UNRESOLVED'),
    ('11111111-1111-1111-1111-111111111111', 'Seasonal nutrient cycles', 'MEDIUM', 'UNRESOLVED'),
    ('11111111-1111-1111-1111-111111111111', 'Local employment transition rate', 'HIGH', 'UNRESOLVED');

INSERT INTO verification_events (crystal_id, actor, action, decision, signature)
VALUES (
    '11111111-1111-1111-1111-111111111111',
    'AXIONYX Guardian Node',
    'Maturity Transition Request (C2 -> C3)',
    'APPROVED',
    'sig_0987654321abcdef'
);
