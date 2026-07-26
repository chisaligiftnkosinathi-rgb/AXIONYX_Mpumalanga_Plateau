CREATE TABLE evidence_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL REFERENCES reality_crystals(id) ON DELETE CASCADE,
    submitted_by UUID NOT NULL REFERENCES identity_profiles(id),
    methodology TEXT NOT NULL,
    dataset_reference VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'SUBMITTED',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_evidence_submissions_crystal ON evidence_submissions(crystal_id);
