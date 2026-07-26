-- AXIONYX Knowledge Graph
-- Schema: Industrial Capability Graph

CREATE TABLE industrial_needs (
    need_id UUID PRIMARY KEY,
    environment VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE required_capabilities (
    capability_id UUID PRIMARY KEY,
    need_id UUID REFERENCES industrial_needs(need_id),
    domain VARCHAR(100) NOT NULL, -- e.g., Materials, Manufacturing
    status VARCHAR(50) NOT NULL -- AVAILABLE, DEVELOPING, MISSING
);

CREATE TABLE ecosystem_suppliers (
    supplier_id UUID PRIMARY KEY,
    capability_id UUID REFERENCES required_capabilities(capability_id),
    name VARCHAR(255) NOT NULL,
    origin VARCHAR(100) NOT NULL -- LOCAL, IMPORTED
);

CREATE TABLE supplier_disruption_risks (
    risk_id UUID PRIMARY KEY,
    supplier_id UUID REFERENCES ecosystem_suppliers(supplier_id),
    replacement_risk DECIMAL(3,2),
    cost_risk DECIMAL(3,2),
    innovation_risk DECIMAL(3,2),
    strategic_risk DECIMAL(3,2),
    overall_vulnerability DECIMAL(3,2)
);
