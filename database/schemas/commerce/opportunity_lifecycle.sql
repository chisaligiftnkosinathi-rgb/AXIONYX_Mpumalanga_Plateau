CREATE TABLE opportunity_lifecycle (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES opportunity_crystals(id) ON DELETE CASCADE,
    state VARCHAR(50) NOT NULL CHECK (state IN ('DISCOVERED', 'QUALIFIED', 'VERIFIED', 'MATCHED', 'CONNECTED', 'FULFILLED', 'LEARNED')),
    actor_id UUID, -- Identity profile that triggered the state change
    notes TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_opportunity_lifecycle_crystal ON opportunity_lifecycle(crystal_id);
