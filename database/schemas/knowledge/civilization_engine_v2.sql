-- AXIONYX Knowledge Graph
-- Schema: Civilization Engine 2.0 (Unified Macro-Architecture)

-- 1. Civilization Learning Index (A66.14)
CREATE TABLE civilization_macro_nodes (
    node_id UUID PRIMARY KEY,
    name VARCHAR(100),
    resources_score DECIMAL(5,4),
    capability_score DECIMAL(5,4),
    learning_velocity DECIMAL(5,4),
    trust_evidence DECIMAL(5,4),
    calculated_cli DECIMAL(5,4),
    evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Continuous Innovation Engine (A66.15)
CREATE TABLE innovation_metabolism_cycles (
    cycle_id UUID PRIMARY KEY,
    pressure_signal DECIMAL(5,4),
    observation_quality DECIMAL(5,4),
    evidence_quality DECIMAL(5,4),
    learning_depth DECIMAL(5,4),
    adaptive_action DECIMAL(5,4),
    innovation_success DECIMAL(5,4), -- Product of the above
    icv_score DECIMAL(5,4), -- Validated Capabilities / (Time + Resources)
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Human-System Inclusion Index (A66.16)
CREATE TABLE system_inclusion_assessments (
    assessment_id UUID PRIMARY KEY,
    designed_system_name VARCHAR(150),
    complexity_score DECIMAL(5,4),
    living_system_sensors DECIMAL(5,4), -- Representation of informal/local actors
    hsii_score DECIMAL(5,4),
    flagged_friction BOOLEAN DEFAULT FALSE,
    assessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Capability Traceability Graph (A66.17)
CREATE TABLE traceability_chains (
    chain_id UUID PRIMARY KEY,
    chain_name VARCHAR(150),
    system_integrity_score DECIMAL(5,4),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transformation_links (
    link_id UUID PRIMARY KEY,
    chain_id UUID REFERENCES traceability_chains(chain_id),
    from_node VARCHAR(100),
    to_node VARCHAR(100),
    evidence_provided BOOLEAN DEFAULT FALSE, -- A FALSE here breaks traceability
    half_truth_flag BOOLEAN DEFAULT FALSE
);
