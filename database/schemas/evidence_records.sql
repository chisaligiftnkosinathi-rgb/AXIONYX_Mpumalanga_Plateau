CREATE TABLE evidence_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES reality_crystals(id) ON DELETE CASCADE,
    source VARCHAR(255) NOT NULL,
    measurement JSONB NOT NULL,
    methodology TEXT NOT NULL,
    observer VARCHAR(255) NOT NULL,
    verification_status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    hash VARCHAR(256) NOT NULL UNIQUE,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_evidence_records_crystal ON evidence_records(crystal_id);
CREATE INDEX idx_evidence_records_status ON evidence_records(verification_status);
