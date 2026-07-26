CREATE TABLE scientific_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES reality_crystals(id) ON DELETE CASCADE,
    reviewer VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    comments TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_scientific_reviews_crystal ON scientific_reviews(crystal_id);
