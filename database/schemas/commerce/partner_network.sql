CREATE TABLE partner_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organisation_name VARCHAR(255) NOT NULL,
    partner_type VARCHAR(100) NOT NULL, -- e.g. 'Supplier', 'Laboratory'
    regions JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE partner_capabilities (
    partner_id UUID PRIMARY KEY REFERENCES partner_profiles(id) ON DELETE CASCADE,
    materials JSONB NOT NULL DEFAULT '[]'::jsonb,
    certifications JSONB NOT NULL DEFAULT '[]'::jsonb,
    capacity JSONB NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE partner_metrics (
    partner_id UUID PRIMARY KEY REFERENCES partner_profiles(id) ON DELETE CASCADE,
    base_capability NUMERIC(3,2) NOT NULL DEFAULT 0.50,
    evidence_score NUMERIC(3,2) NOT NULL DEFAULT 0.50,
    availability_score NUMERIC(3,2) NOT NULL DEFAULT 0.50,
    trust_score NUMERIC(3,2) NOT NULL DEFAULT 0.50
);

CREATE TABLE opportunity_inbox (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES opportunity_crystals(id),
    partner_id UUID NOT NULL REFERENCES partner_profiles(id),
    match_confidence NUMERIC(3,2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING_RESPONSE',
    delivered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE partner_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inbox_id UUID NOT NULL REFERENCES opportunity_inbox(id),
    response VARCHAR(50) NOT NULL CHECK (response IN ('ACCEPTED', 'REJECTED', 'NEGOTIATING')),
    response_notes TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
