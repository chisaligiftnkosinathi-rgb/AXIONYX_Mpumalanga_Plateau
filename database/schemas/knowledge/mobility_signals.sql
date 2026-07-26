-- AXIONYX Knowledge Graph
-- Schema: Mobility Signals & Industrial Reactions

CREATE TABLE mobility_nodes (
    node_id UUID PRIMARY KEY,
    node_type VARCHAR(50) DEFAULT 'E_HAILING_VEHICLE',
    region VARCHAR(100),
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mobility_telemetry (
    signal_id UUID PRIMARY KEY,
    node_id UUID REFERENCES mobility_nodes(node_id),
    trips_per_day INT,
    fuel_efficiency DECIMAL(5,2),
    maintenance_events INT,
    parts_availability_score DECIMAL(3,2), -- 0.00 to 1.00
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE industrial_opportunity_signals (
    opportunity_id UUID PRIMARY KEY,
    region VARCHAR(100),
    mobility_pressure_index DECIMAL(3,2),
    capability_gap DECIMAL(3,2),
    industrial_opportunity_index DECIMAL(3,2),
    status VARCHAR(50) DEFAULT 'DETECTED', -- DETECTED, REACTION_TRIGGERED, CAPABILITY_FORMED
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reality_translation_metrics (
    metric_id UUID PRIMARY KEY,
    validated_signals INT,
    industrial_responses_created INT,
    rte_score DECIMAL(5,4), -- Reality Translation Efficiency
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
