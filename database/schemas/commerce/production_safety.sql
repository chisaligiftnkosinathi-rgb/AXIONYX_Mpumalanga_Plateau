CREATE TABLE consent_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_hash VARCHAR(64) NOT NULL,
    purpose TEXT NOT NULL,
    consent_status VARCHAR(20) NOT NULL CHECK (consent_status IN ('GRANTED', 'DENIED', 'REVOKED')),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE retention_policy (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data_type VARCHAR(50) NOT NULL UNIQUE,
    retention_days INTEGER,
    deletion_method VARCHAR(50) NOT NULL,
    last_executed TIMESTAMP WITH TIME ZONE
);

INSERT INTO retention_policy (data_type, retention_days, deletion_method) VALUES
    ('ACTIVE_SESSION', 30, 'PURGE_HASH'),
    ('OPPORTUNITY_CRYSTAL', NULL, 'INDEFINITE_ANONYMISED'),
    ('CIVILIZATION_MEMORY', NULL, 'PERMANENT_MACRO_PATTERN');

CREATE TABLE opportunity_audit (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL,
    origin_hash VARCHAR(64),
    consent_id UUID REFERENCES consent_events(id),
    intent_data JSONB,
    match_reasoning JSONB,
    partner_id UUID,
    outcome VARCHAR(50),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
