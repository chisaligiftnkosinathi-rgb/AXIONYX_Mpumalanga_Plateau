-- AXIONYX Knowledge Graph
-- Schema: Emalahleni Systems Health & Digital Immune System

CREATE TABLE system_health_nodes (
    node_id UUID PRIMARY KEY,
    domain VARCHAR(100), -- 'ENERGY_COAL', 'PHARMA_MEDICAL'
    energy_score DECIMAL(5,4),
    instrumentation_score DECIMAL(5,4),
    capability_score DECIMAL(5,4),
    environment_score DECIMAL(5,4),
    resources_score DECIMAL(5,4),
    learning_velocity DECIMAL(5,4),
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE instrumentation_telemetry (
    telemetry_id UUID PRIMARY KEY,
    node_id UUID REFERENCES system_health_nodes(node_id),
    sensor_type VARCHAR(100), -- e.g., 'Sulphur Sensor', 'Purity Spectrometer'
    expected_value DECIMAL(15,4),
    observed_value DECIMAL(15,4),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE deviation_events (
    event_id UUID PRIMARY KEY,
    telemetry_id UUID REFERENCES instrumentation_telemetry(telemetry_id),
    deviation_vector DECIMAL(5,4),
    status VARCHAR(50) DEFAULT 'ISOLATED_FOR_LEARNING',
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE digital_product_dna (
    dna_id UUID PRIMARY KEY,
    batch_id VARCHAR(100) NOT NULL,
    domain VARCHAR(100),
    material_provenance_hash VARCHAR(255),
    manufacturing_evidence_hash VARCHAR(255),
    testing_evidence_hash VARCHAR(255),
    field_learning_hash VARCHAR(255),
    dna_integrity_score DECIMAL(5,4)
);
