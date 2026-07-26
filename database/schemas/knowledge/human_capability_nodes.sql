-- AXIONYX Knowledge Graph
-- Schema: Human Capability Nodes

CREATE TABLE human_nodes (
    node_id UUID PRIMARY KEY,
    domain VARCHAR(100) NOT NULL, -- e.g., 'Plumbing', 'Welding', 'Agriculture'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'ISOLATED' -- ISOLATED, TEAM_READY, ENTERPRISE_READY
);

CREATE TABLE capability_dna (
    dna_id UUID PRIMARY KEY,
    node_id UUID REFERENCES human_nodes(node_id),
    knowledge_score DECIMAL(3,2) DEFAULT 0.00,
    skill_score DECIMAL(3,2) DEFAULT 0.00,
    reliability_score DECIMAL(3,2) DEFAULT 0.00,
    scalability_score DECIMAL(3,2) DEFAULT 0.00,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE capability_evidence (
    evidence_id UUID PRIMARY KEY,
    node_id UUID REFERENCES human_nodes(node_id),
    evidence_type VARCHAR(100), -- e.g., 'Certification', 'Customer_Feedback', 'Project_Photos'
    verification_status VARCHAR(50) DEFAULT 'PENDING',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE human_capability_kpis (
    kpi_id UUID PRIMARY KEY,
    discovery_rate DECIMAL(5,2),
    evidence_completion_rate DECIMAL(5,2),
    conversion_rate DECIMAL(5,2),
    knowledge_transfer_rate DECIMAL(5,2),
    industrial_emergence_index DECIMAL(5,2),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
