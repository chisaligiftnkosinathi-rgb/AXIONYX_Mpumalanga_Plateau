CREATE TABLE opportunity_crystals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain VARCHAR(50) NOT NULL, -- e.g., 'Vehicles', 'Materials', 'Industrial'
    user_id UUID NOT NULL REFERENCES curiosity_users(id),
    intent_profile JSONB NOT NULL DEFAULT '{}'::jsonb,
    missing_information JSONB NOT NULL DEFAULT '[]'::jsonb,
    status VARCHAR(50) NOT NULL DEFAULT 'QUALIFYING',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE material_demand_signals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES opportunity_crystals(id) ON DELETE CASCADE,
    material_name VARCHAR(255) NOT NULL,
    required_quality VARCHAR(100),
    application_domain VARCHAR(100),
    quantity VARCHAR(100),
    verified_match JSONB
);
