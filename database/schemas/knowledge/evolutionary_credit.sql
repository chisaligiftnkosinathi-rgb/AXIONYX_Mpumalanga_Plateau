-- AXIONYX Knowledge Graph
-- Schema: Evolutionary Credit Score (A66.24)

CREATE TABLE failure_events (
    failure_id UUID PRIMARY KEY,
    entity_id UUID,
    failure_type VARCHAR(50), -- TOXIC (Fraud) or HONEST (Environment)
    description TEXT,
    occurred_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE metabolized_learnings (
    learning_id UUID PRIMARY KEY,
    failure_id UUID REFERENCES failure_events(failure_id),
    root_cause_identified BOOLEAN DEFAULT FALSE,
    correction_implemented BOOLEAN DEFAULT FALSE,
    new_standard_created BOOLEAN DEFAULT FALSE,
    lf_score DECIMAL(5,2), -- Learning extracted from failure
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evolutionary_credit_scores (
    entity_id UUID PRIMARY KEY,
    c_old DECIMAL(8,2),
    l_f DECIMAL(8,2),
    l_s DECIMAL(8,2),
    c_new DECIMAL(8,2),
    gold_standard_rating DECIMAL(10,2),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
