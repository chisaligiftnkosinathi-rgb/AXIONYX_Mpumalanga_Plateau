-- AXIONYX Knowledge Graph
-- Schema: Capability to Enterprise Assembly

CREATE TABLE enterprise_clusters (
    cluster_id UUID PRIMARY KEY,
    cluster_name VARCHAR(255) NOT NULL,
    emergence_score DECIMAL(5,4), -- The calculated E value
    lifecycle_stage VARCHAR(50) DEFAULT 'CAPABILITY_MATCHING', -- Follows the 8 life events
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cluster_nodes (
    mapping_id UUID PRIMARY KEY,
    cluster_id UUID REFERENCES enterprise_clusters(cluster_id),
    node_id UUID, -- References human_nodes(node_id)
    capability_contribution VARCHAR(100), -- e.g., 'Chemistry', 'Engineering'
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enterprise_lifecycle_events (
    event_id UUID PRIMARY KEY,
    cluster_id UUID REFERENCES enterprise_clusters(cluster_id),
    event_type VARCHAR(100), 
    -- e.g., 'Origin', 'Evidence', 'Identity', 'Matching', 'Opportunity', 'Formation', 'Trust Maturity'
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verification_hash VARCHAR(255)
);
