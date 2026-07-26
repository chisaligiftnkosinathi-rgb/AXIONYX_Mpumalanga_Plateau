-- AXIONYX Knowledge Graph
-- Schema: The Impande Standard (A66.19)

CREATE TABLE impande_seeds (
    seed_id UUID PRIMARY KEY,
    entity_name VARCHAR(150),
    invisible_potential DECIMAL(5,4),
    execution_level DECIMAL(5,4),
    evidence_level DECIMAL(5,4),
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE germination_cycles (
    cycle_id UUID PRIMARY KEY,
    seed_id UUID REFERENCES impande_seeds(seed_id),
    impande_score DECIMAL(5,4), -- Potential * Execution * Evidence
    traditional_credit_score INTEGER,
    bank_decision VARCHAR(50), -- REJECT_CAPITAL, PROVIDE_MEASUREMENT, DEPLOY_CAPITAL
    rationale TEXT,
    assessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
