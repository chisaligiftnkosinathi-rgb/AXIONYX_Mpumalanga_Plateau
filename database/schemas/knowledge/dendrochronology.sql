-- AXIONYX Knowledge Graph
-- Schema: Civilization Dendrochronology Engine (A66.18)

CREATE TABLE civilization_trees (
    tree_id UUID PRIMARY KEY,
    entity_name VARCHAR(150),
    current_state VARCHAR(50), -- ACTIVE, SACRIFICED, TRANSFORMED
    planted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE environmental_seasons (
    season_id UUID PRIMARY KEY,
    tree_id UUID REFERENCES civilization_trees(tree_id),
    season_type VARCHAR(50), -- ABUNDANCE, DROUGHT, NIGHT
    resource_level DECIMAL(5,4),
    pressure_level DECIMAL(5,4),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE growth_rings (
    ring_id UUID PRIMARY KEY,
    tree_id UUID REFERENCES civilization_trees(tree_id),
    season_id UUID REFERENCES environmental_seasons(season_id),
    ring_type VARCHAR(100), -- HARDENED_ADAPTATION_RING, SACRIFICE_RING, EXPANSION_RING, FORGOTTEN_LOSS
    resilience_score DECIMAL(5,4),
    memory_preserved BOOLEAN DEFAULT FALSE,
    wisdom_encoded TEXT, -- The standard or lesson learned
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
