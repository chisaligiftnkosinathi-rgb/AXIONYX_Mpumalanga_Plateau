-- AXIONYX Knowledge Graph
-- Schema: Walala Wasala Calibration Engine

CREATE TABLE walala_calibration_events (
    id UUID PRIMARY KEY,
    node_id UUID NOT NULL,
    intent_state DECIMAL(3,2) NOT NULL,
    evidence_state DECIMAL(3,2) NOT NULL,
    execution_state DECIMAL(3,2) NOT NULL,
    learning_state DECIMAL(3,2) NOT NULL,
    alignment_result DECIMAL(3,2) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reality_cycles (
    cycle_id UUID PRIMARY KEY,
    calibration_event_id UUID REFERENCES walala_calibration_events(id),
    claim TEXT NOT NULL,
    prediction TEXT NOT NULL,
    observed_result TEXT NOT NULL,
    difference TEXT NOT NULL,
    lesson_generated TEXT NOT NULL
);
