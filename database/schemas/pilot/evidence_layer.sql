CREATE TABLE pilot_human_metrics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    conversations_started INTEGER DEFAULT 0,
    consent_granted INTEGER DEFAULT 0,
    intents_completed INTEGER DEFAULT 0,
    abandoned_conversations INTEGER DEFAULT 0
);

CREATE TABLE pilot_market_metrics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    vehicles_requested INTEGER DEFAULT 0,
    avg_budget_zar NUMERIC(10,2) DEFAULT 0.00,
    top_region VARCHAR(50),
    top_purpose VARCHAR(50)
);

CREATE TABLE pilot_partner_metrics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    opportunities_sent INTEGER DEFAULT 0,
    responses_received INTEGER DEFAULT 0,
    successful_connections INTEGER DEFAULT 0,
    sales_converted INTEGER DEFAULT 0
);

CREATE TABLE pilot_economic_metrics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    total_lead_value NUMERIC(15,2) DEFAULT 0.00,
    total_conversion_value NUMERIC(15,2) DEFAULT 0.00,
    axionyx_revenue NUMERIC(15,2) DEFAULT 0.00
);
