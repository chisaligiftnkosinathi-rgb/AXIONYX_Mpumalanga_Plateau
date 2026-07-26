CREATE TABLE reality_crystals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(100) NOT NULL,
    hypothesis TEXT NOT NULL,
    maturity_level VARCHAR(10) NOT NULL CHECK (maturity_level IN ('C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6')),
    confidence_score NUMERIC(5,4) NOT NULL CHECK (confidence_score >= 0 AND confidence_score <= 1),
    uncertainty_range JSONB NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PROPOSED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reality_crystals_domain ON reality_crystals(domain);
CREATE INDEX idx_reality_crystals_maturity ON reality_crystals(maturity_level);
