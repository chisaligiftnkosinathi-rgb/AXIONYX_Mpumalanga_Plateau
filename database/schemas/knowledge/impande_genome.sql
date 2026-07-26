-- AXIONYX Knowledge Graph
-- Schema: The Impande Genome Map (A66.20)

CREATE TABLE capability_forest (
    node_id UUID PRIMARY KEY,
    entity_name VARCHAR(150),
    germination_stage INTEGER CHECK (germination_stage >= 0 AND germination_stage <= 6),
    evidence_score DECIMAL(5,4),
    industry_sector VARCHAR(100),
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE forest_connections (
    connection_id UUID PRIMARY KEY,
    source_node_id UUID REFERENCES capability_forest(node_id),
    target_node_id UUID REFERENCES capability_forest(node_id),
    connection_type VARCHAR(50), -- E.g., BRANCH_FORMATION, SUPPLY_CHAIN
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
