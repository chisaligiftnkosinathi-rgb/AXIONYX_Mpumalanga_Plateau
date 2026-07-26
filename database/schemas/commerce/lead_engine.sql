CREATE TABLE curiosity_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    first_interaction TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_interaction TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE intent_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES curiosity_users(id),
    raw_message TEXT NOT NULL,
    parsed_intent JSONB NOT NULL DEFAULT '{}'::jsonb,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE qualified_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES curiosity_users(id),
    customer_intent VARCHAR(100) NOT NULL,
    vehicle_need VARCHAR(100) NOT NULL,
    budget VARCHAR(100),
    location VARCHAR(100),
    urgency VARCHAR(50),
    qualification_score NUMERIC(5,2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'NEW',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vehicle_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID NOT NULL REFERENCES qualified_leads(id) ON DELETE CASCADE,
    recommended_model VARCHAR(255) NOT NULL,
    reasoning JSONB NOT NULL,
    estimated_finance JSONB NOT NULL
);

CREATE TABLE partner_callbacks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id UUID NOT NULL REFERENCES qualified_leads(id),
    partner_id VARCHAR(100) NOT NULL,
    callback_status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    conversion_value NUMERIC(10,2),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
