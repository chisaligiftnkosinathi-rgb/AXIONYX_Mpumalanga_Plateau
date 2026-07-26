CREATE TABLE knowledge_nodes (
    id VARCHAR(50) PRIMARY KEY,
    node_type VARCHAR(50) NOT NULL, -- 'HUMAN_INTENT', 'OPPORTUNITY_CRYSTAL', 'ORGANISATION', 'CAPABILITY', 'EVIDENCE', 'ECONOMIC_CRYSTAL'
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(100),
    metadata_json JSONB DEFAULT '{}'::jsonb,
    maturity_level VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE knowledge_relationships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_node_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    target_node_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    relationship_type VARCHAR(50) NOT NULL, -- 'REQUIRES', 'PROVIDES', 'VALIDATES', 'RESULTS_IN', 'DISCOVERED_FROM'
    confidence NUMERIC(4,3) NOT NULL,
    evidence_reference VARCHAR(255),
    relationship_evidence TEXT NOT NULL, -- Strict provenance requirement
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE capability_passports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_node_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    capabilities JSONB NOT NULL,
    evidence_history JSONB,
    verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE knowledge_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    opportunity_node_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    partner_node_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    outcome VARCHAR(50),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE crystal_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_a_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    crystal_b_id VARCHAR(50) REFERENCES knowledge_nodes(id),
    federation_reason TEXT NOT NULL
);
