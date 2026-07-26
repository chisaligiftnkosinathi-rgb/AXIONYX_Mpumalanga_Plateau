CREATE TABLE revenue_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    opportunity_id UUID NOT NULL REFERENCES opportunity_crystals(id),
    partner_id UUID NOT NULL REFERENCES identity_profiles(id),
    transaction_type VARCHAR(50) NOT NULL CHECK (transaction_type IN ('SUBSCRIPTION', 'LEAD_FEE', 'SUCCESS_FEE')),
    amount NUMERIC(12,2) NOT NULL,
    currency VARCHAR(10) NOT NULL DEFAULT 'ZAR',
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_revenue_transactions_partner ON revenue_transactions(partner_id);
