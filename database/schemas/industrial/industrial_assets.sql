CREATE TABLE industrial_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    owner_id UUID NOT NULL REFERENCES identity_profiles(id),
    operating_state VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    environmental_links JSONB NOT NULL DEFAULT '[]'::jsonb,
    linked_crystals JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_industrial_assets_owner ON industrial_assets(owner_id);
CREATE INDEX idx_industrial_assets_type ON industrial_assets(type);
