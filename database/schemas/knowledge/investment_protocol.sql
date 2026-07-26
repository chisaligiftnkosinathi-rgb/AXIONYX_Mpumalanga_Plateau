-- AXIONYX Knowledge Graph
-- Schema: Walala Wasala Investment Protocol

CREATE TABLE investment_nodes (
    node_id UUID PRIMARY KEY,
    entity_name VARCHAR(255) NOT NULL,
    entity_type VARCHAR(100) DEFAULT 'ENTERPRISE',
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evidence_maturity_logs (
    log_id UUID PRIMARY KEY,
    node_id UUID REFERENCES investment_nodes(node_id),
    demand_score DECIMAL(3,2),
    capability_score DECIMAL(3,2),
    evidence_score DECIMAL(3,2),
    learning_rate DECIMAL(3,2),
    calculated_potential DECIMAL(5,4),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE capital_deployments (
    deployment_id UUID PRIMARY KEY,
    node_id UUID REFERENCES investment_nodes(node_id),
    intervention_type VARCHAR(100), -- 'EVIDENCE_UPGRADE', 'CAPACITY_EXPANSION', 'INDUSTRIAL_CATALYST'
    capital_amount DECIMAL(15,2),
    deployment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expected_capability_yield DECIMAL(5,4)
);

CREATE TABLE investment_learning_reserve (
    learning_id UUID PRIMARY KEY,
    deployment_id UUID REFERENCES capital_deployments(deployment_id),
    failure_mode VARCHAR(255),
    root_cause TEXT,
    new_investment_rule TEXT, -- Feed back into the Engine
    learned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
