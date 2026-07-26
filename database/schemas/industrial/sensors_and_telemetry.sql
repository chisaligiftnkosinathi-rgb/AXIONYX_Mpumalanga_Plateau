CREATE TABLE sensors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    asset_id UUID NOT NULL REFERENCES industrial_assets(id) ON DELETE CASCADE,
    parameter VARCHAR(100) NOT NULL,
    calibration_status VARCHAR(50) NOT NULL DEFAULT 'UNVERIFIED',
    last_calibration_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE telemetry_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sensor_id UUID NOT NULL REFERENCES sensors(id),
    value NUMERIC(10,4) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    provenance_hash VARCHAR(256) NOT NULL UNIQUE,
    validation_status VARCHAR(50) NOT NULL DEFAULT 'RAW'
);

CREATE INDEX idx_telemetry_events_sensor ON telemetry_events(sensor_id);
