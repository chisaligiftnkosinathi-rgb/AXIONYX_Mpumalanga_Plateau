CREATE TABLE uncertainty_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES reality_crystals(id) ON DELETE CASCADE,
    unknown_variable VARCHAR(255) NOT NULL,
    impact VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'UNRESOLVED'
);

CREATE INDEX idx_uncertainty_records_crystal ON uncertainty_records(crystal_id);
