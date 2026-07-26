-- AXIONYX Knowledge Graph
-- Schema: Industrial Simulation Telemetry

CREATE TABLE simulation_runs (
    run_id UUID PRIMARY KEY,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reaction_chamber VARCHAR(100) NOT NULL, -- e.g., 'Mobility Materials', 'Energy Independence'
    ignition_probability DECIMAL(5,4) NOT NULL,
    reaction_state VARCHAR(50) NOT NULL -- FAILED, LOW, MEDIUM, HIGH
);

CREATE TABLE node_inputs (
    input_id UUID PRIMARY KEY,
    run_id UUID REFERENCES simulation_runs(run_id),
    base_resources DECIMAL(3,2),
    base_knowledge DECIMAL(3,2),
    base_manufacturing DECIMAL(3,2),
    base_capital DECIMAL(3,2),
    base_trust DECIMAL(3,2),
    translation_multiplier DECIMAL(3,2)
);

CREATE TABLE expected_outputs (
    output_id UUID PRIMARY KEY,
    run_id UUID REFERENCES simulation_runs(run_id),
    effective_resources DECIMAL(3,2),
    effective_knowledge DECIMAL(3,2),
    effective_manufacturing DECIMAL(3,2),
    effective_capital DECIMAL(3,2),
    effective_trust DECIMAL(3,2)
);
