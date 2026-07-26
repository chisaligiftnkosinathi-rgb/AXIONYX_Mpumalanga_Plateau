CREATE TABLE identity_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('PERSON', 'INSTITUTION')),
    role VARCHAR(100) NOT NULL,
    capabilities JSONB NOT NULL DEFAULT '[]'::jsonb,
    contributions INTEGER NOT NULL DEFAULT 0,
    institution_id UUID REFERENCES identity_profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_identity_profiles_role ON identity_profiles(role);
