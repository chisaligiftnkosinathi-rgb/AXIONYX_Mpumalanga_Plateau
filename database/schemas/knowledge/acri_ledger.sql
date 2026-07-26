-- AXIONYX Knowledge Graph
-- Schema: African Collaboration Research Institute (ACRI)

CREATE TABLE trust_graph (
    node_id UUID PRIMARY KEY,
    entity_name VARCHAR(150),
    consistency_score DECIMAL(5,4),
    evidence_volume INTEGER,
    average_evidence_quality DECIMAL(5,4),
    longevity_years DECIMAL(5,2),
    final_trust_score DECIMAL(8,4),
    last_calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE civilizational_memory (
    memory_id UUID PRIMARY KEY,
    environmental_problem TEXT,
    translated_research_question TEXT,
    nodes_involved TEXT[], -- Array of UUIDs from trust_graph
    experiment_outcome VARCHAR(50), -- SUCCESS, FAILURE, REVISION
    knowledge_standard_generated TEXT,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
