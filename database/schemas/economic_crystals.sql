CREATE TABLE economic_crystals (
    id VARCHAR(50) PRIMARY KEY, -- e.g., 'CRYSTAL_0001'
    domain VARCHAR(100) NOT NULL,
    region VARCHAR(100),
    pattern TEXT NOT NULL,
    maturity_state VARCHAR(50) NOT NULL, -- 'C0 Observation', 'C1 Pattern Detected', etc.
    confidence NUMERIC(4,3) NOT NULL,
    evidence_count INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    next_requirement TEXT
);

-- Seed the initial crystal structure
INSERT INTO economic_crystals 
(id, domain, region, pattern, maturity_state, confidence, evidence_count, next_requirement) 
VALUES 
('CRYSTAL_0001', 'vehicle_market', 'Mpumalanga', 'income_vehicle_demand', 'C1 Pattern Detected', 0.85, 100, '500+ conversations across multiple regions');
