CREATE TABLE nodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_name VARCHAR(100) NOT NULL UNIQUE,
    node_type VARCHAR(50) NOT NULL, -- 'WHATSAPP', 'WEB', 'PARTNER', 'MATERIAL', 'SCIENCE', 'INDUSTRIAL'
    status VARCHAR(20) DEFAULT 'ONLINE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE node_health (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id UUID REFERENCES nodes(id),
    status VARCHAR(50) NOT NULL,
    last_ping TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    metrics JSONB DEFAULT '{}'::jsonb
);

CREATE TABLE intent_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id UUID REFERENCES nodes(id),
    intent_domain VARCHAR(50) NOT NULL,
    intent_purpose VARCHAR(100),
    confidence_score NUMERIC(4,3),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE opportunity_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    crystal_id UUID NOT NULL,
    node_id UUID REFERENCES nodes(id),
    status VARCHAR(50) NOT NULL, -- 'CREATED', 'MATCHED', 'ACCEPTED', 'CONVERTED'
    lead_value NUMERIC(10,2),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE economic_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    opportunity_id UUID REFERENCES opportunity_events(id),
    partner_id UUID,
    revenue_generated NUMERIC(15,2),
    currency VARCHAR(10) DEFAULT 'ZAR',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE system_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    metric_name VARCHAR(100) NOT NULL,
    metric_value NUMERIC(15,2) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
