CREATE TABLE human_elements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    capabilities JSONB NOT NULL DEFAULT '[]'::jsonb,
    intent JSONB NOT NULL DEFAULT '{}'::jsonb,
    trust_score NUMERIC(5,4) NOT NULL DEFAULT 1.0000,
    availability VARCHAR(50) NOT NULL DEFAULT 'AVAILABLE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_human_elements_capabilities ON human_elements USING GIN (capabilities);
