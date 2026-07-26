-- AXIONYX Knowledge Graph
-- Schema: The Impande Pollination Network (A66.21)

CREATE TABLE communication_soil (
    signal_id UUID PRIMARY KEY,
    source_platform VARCHAR(50), -- WHATSAPP, SENSOR_DATA
    raw_content TEXT,
    extracted_need VARCHAR(255),
    demand_score DECIMAL(5,4),
    received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pollination_matches (
    match_id UUID PRIMARY KEY,
    signal_id UUID REFERENCES communication_soil(signal_id),
    recommended_action VARCHAR(50), -- PROPOSE_MERGER, AWAITING_CAPABILITY
    capital_unlocked BOOLEAN DEFAULT FALSE,
    matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE central_bank_ledgers (
    ledger_id UUID PRIMARY KEY,
    ledger_type VARCHAR(50), -- RESOURCE, CAPABILITY, EVIDENCE, OPPORTUNITY
    entity_id UUID, -- References tree/node ID
    verified_value TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
