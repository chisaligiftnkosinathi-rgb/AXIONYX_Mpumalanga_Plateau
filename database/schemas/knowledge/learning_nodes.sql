-- AXIONYX Knowledge Graph
-- Schema: Capability Learning Engine

CREATE TABLE learning_nodes (
    lesson_id VARCHAR(50) PRIMARY KEY,
    source_nc_id VARCHAR(50) NOT NULL,
    failure_pattern TEXT NOT NULL,
    root_cause TEXT NOT NULL,
    learning TEXT NOT NULL,
    maturity VARCHAR(50) DEFAULT 'LESSON_CREATED',
    confidence DECIMAL(3,2) DEFAULT 0.40,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE preventive_rules (
    rule_id VARCHAR(50) PRIMARY KEY,
    origin_lesson_id VARCHAR(50) REFERENCES learning_nodes(lesson_id),
    rule_statement TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rule_applications (
    application_id UUID PRIMARY KEY,
    rule_id VARCHAR(50) REFERENCES preventive_rules(rule_id),
    applied_to_domain VARCHAR(100),
    enforced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
