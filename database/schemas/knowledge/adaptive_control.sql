-- AXIONYX Knowledge Graph
-- Schema: Adaptive Control & Learning Velocity

CREATE TABLE deviation_events (
    event_id UUID PRIMARY KEY,
    node_id UUID, -- References enterprise_nodes
    expected_metric DECIMAL(15,2),
    observed_metric DECIMAL(15,2),
    deviation_vector DECIMAL(5,4), -- The D value
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE learning_responses (
    response_id UUID PRIMARY KEY,
    event_id UUID REFERENCES deviation_events(event_id),
    improvements_generated INT,
    time_taken_days INT,
    learning_velocity DECIMAL(5,4), -- The LV value
    resolved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE node_capability_history (
    history_id UUID PRIMARY KEY,
    node_id UUID,
    previous_capability DECIMAL(5,4),
    new_capability DECIMAL(5,4),
    status VARCHAR(50), -- 'EVOLVING', 'STAGNANT'
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
