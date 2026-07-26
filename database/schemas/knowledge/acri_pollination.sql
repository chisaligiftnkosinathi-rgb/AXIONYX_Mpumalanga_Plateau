-- AXIONYX Knowledge Graph
-- Schema: ACRI Pollination Engine (A66.25)

CREATE TABLE collaboration_genomes (
    node_id UUID PRIMARY KEY,
    root_skills VARCHAR(255),
    stem_operations VARCHAR(255),
    leaf_evidence VARCHAR(255),
    flower_product VARCHAR(255),
    pollination_network_size INT DEFAULT 0
);

CREATE TABLE ecosystem_pollinators (
    pollinator_id UUID PRIMARY KEY,
    source_node_id UUID REFERENCES collaboration_genomes(node_id),
    target_node_id UUID REFERENCES collaboration_genomes(node_id),
    value_exchanged VARCHAR(255), -- Capital, Knowledge, Access
    occurred_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE musa_indices (
    node_id UUID PRIMARY KEY REFERENCES collaboration_genomes(node_id),
    value_created DECIMAL(10,2),
    people_empowered INT,
    resources_consumed DECIMAL(10,2),
    trust_built DECIMAL(5,2),
    musa_index_score DECIMAL(10,2),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
