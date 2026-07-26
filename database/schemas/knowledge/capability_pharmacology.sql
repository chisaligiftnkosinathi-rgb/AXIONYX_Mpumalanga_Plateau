-- AXIONYX Knowledge Graph
-- Schema: Capability Pharmacopoeia

CREATE TABLE environmental_conditions (
    condition_id UUID PRIMARY KEY,
    location VARCHAR(100), -- e.g. 'Mpumalanga'
    stress_pressure_description TEXT,
    identified_imbalance TEXT,
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE capability_medicines (
    medicine_id UUID PRIMARY KEY,
    condition_id UUID REFERENCES environmental_conditions(condition_id),
    intent_diagnosis VARCHAR(50), -- 'EXTRACTION', 'CAPABILITY_DEVELOPMENT'
    active_ingredient VARCHAR(100), -- The core skill
    evidence_maturity DECIMAL(5,4),
    pharmacovigilance_score DECIMAL(5,4),
    classification VARCHAR(50) -- 'DANGEROUS_COMPOUND', 'TRUSTED_MEDICINE'
);

CREATE TABLE excipient_links (
    link_id UUID PRIMARY KEY,
    medicine_id UUID REFERENCES capability_medicines(medicine_id),
    support_node_name VARCHAR(100), -- e.g. 'Logistics', 'Capital'
    support_strength DECIMAL(5,4)
);

CREATE TABLE pharmacovigilance_logs (
    log_id UUID PRIMARY KEY,
    medicine_id UUID REFERENCES capability_medicines(medicine_id),
    adverse_event_description TEXT,
    root_cause_isolated BOOLEAN DEFAULT FALSE,
    preventive_measure_deployed BOOLEAN DEFAULT FALSE,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
