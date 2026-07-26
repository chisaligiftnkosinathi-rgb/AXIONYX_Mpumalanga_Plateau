-- AXIONYX Knowledge Graph
-- Schema: Capability Non-Conformances

CREATE TABLE global_ncs (
    nc_id VARCHAR(50) PRIMARY KEY, -- e.g. GIFT-HUB-NC-001
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    severity VARCHAR(50),
    detection_system VARCHAR(100),
    current_state VARCHAR(50) DEFAULT 'DETECTED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE root_cause_analyses (
    rca_id UUID PRIMARY KEY,
    nc_id VARCHAR(50) REFERENCES global_ncs(nc_id),
    why_1 TEXT,
    why_2 TEXT,
    why_3 TEXT,
    why_4 TEXT,
    why_5 TEXT,
    confirmed_root_cause TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE corrective_actions (
    capa_id UUID PRIMARY KEY,
    nc_id VARCHAR(50) REFERENCES global_ncs(nc_id),
    action_description TEXT NOT NULL,
    target_bridge VARCHAR(100),
    status VARCHAR(50) DEFAULT 'PENDING'
);

CREATE TABLE evidence_closures (
    evidence_id UUID PRIMARY KEY,
    nc_id VARCHAR(50) REFERENCES global_ncs(nc_id),
    capa_id UUID REFERENCES corrective_actions(capa_id),
    validation_status VARCHAR(50) DEFAULT 'REVIEW', -- REVIEW, VALIDATED, REJECTED
    capability_upgrade_event_fired BOOLEAN DEFAULT FALSE,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
