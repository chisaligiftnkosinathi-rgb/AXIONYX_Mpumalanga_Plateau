-- AXIONYX Knowledge Graph
-- Schema: Trust Reputation Graph

CREATE TABLE partners (
    partner_id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    trust_state VARCHAR(50) NOT NULL,
    maturity_score DECIMAL(3,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE partner_capabilities (
    capability_id UUID PRIMARY KEY,
    partner_id UUID REFERENCES partners(partner_id),
    domain VARCHAR(100) NOT NULL,
    capability VARCHAR(255) NOT NULL
);

CREATE TABLE evidence_records (
    evidence_id UUID PRIMARY KEY,
    partner_id UUID REFERENCES partners(partner_id),
    evidence_type VARCHAR(100) NOT NULL,
    verified BOOLEAN DEFAULT FALSE,
    source VARCHAR(255) NOT NULL
);

CREATE TABLE risk_signals (
    signal_id UUID PRIMARY KEY,
    partner_id UUID REFERENCES partners(partner_id),
    severity VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL -- OPEN, MITIGATED, REVIEWING
);
