import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// A61 - AXIONYX API Gateway (Sprint 2 - Observatory MVP)

// Mocked Seed Data for Sprint 2
const SEED_CRYSTAL = {
    id: "AXIONYX_REALITY_CRYSTAL_001",
    name: "Mpumalanga Acid Mine Drainage Regeneration Pilot",
    domain: "Environmental Chemistry",
    hypothesis: "Can targeted AMD treatment restore river health while maintaining local economic stability?",
    maturity_level: "C3 Lab Validated",
    confidence_score: 0.82,
    uncertainty: [
        "Long-term ecosystem adaptation",
        "Seasonal nutrient cycles",
        "Local employment transition rate"
    ],
    status: "Awaiting Field Validation"
};

const SEED_EVIDENCE = {
    id: "22222222-2222-2222-2222-222222222222",
    crystal_id: "AXIONYX_REALITY_CRYSTAL_001",
    source: "University Laboratory (Pretoria)",
    measurement: "pH reduction: 3.2 to 6.8 over 30 days",
    methodology: "Laboratory closed-system bioreactor simulation using local microbial consortia.",
    observer: "Dr. S. Mokoena",
    verification_status: "VERIFIED",
    hash: "a83f92b4c10e6a9876543210fdecba98",
    timestamp: "2026-07-26T10:00:00Z"
};

app.get('/api/crystals', (req, res) => {
    res.json([SEED_CRYSTAL]);
});

app.get('/api/crystals/:id', (req, res) => {
    res.json(SEED_CRYSTAL);
});

app.get('/api/evidence', (req, res) => {
    res.json([SEED_EVIDENCE]);
});

app.get('/api/evidence/:id', (req, res) => {
    res.json(SEED_EVIDENCE);
});

app.get('/api/governance/:crystalId', (req, res) => {
    res.json({
        crystal_id: req.params.crystalId,
        confidence: 0.78,
        known_risks: 3,
        unknown_variables: 5,
        human_review_required: "YES"
    });
});

// --- Sprint 3 ---

app.get('/api/workspace', (req, res) => {
    res.json({
        crystal_id: "AXIONYX_REALITY_CRYSTAL_001",
        collaborators: [
            { institution: "University Laboratory", role: "Evidence Validator" },
            { institution: "Mining Partner", role: "Field Data Provider" },
            { institution: "Community Group", role: "Impact Observer" },
            { institution: "Guardian", role: "Governance Review" }
        ],
        pending_submissions: [
            { id: "SUB_999", methodology: "Field water pH sampling", status: "AWAITING_REVIEW" }
        ],
        maturity_requirements: [
            { level: "C4", required: ["University", "Industry", "AXIONYX Guardian"] }
        ]
    });
});

app.post('/api/submissions', (req, res) => {
    res.status(201).json({ message: "Evidence Submitted. Awaiting Review." });
});

app.post('/api/reviews', (req, res) => {
    const { submitter_id, reviewer_id } = req.body;
    if (submitter_id === reviewer_id) {
        return res.status(403).json({ error: "Conflict of Interest: Submitter cannot be the Reviewer." });
    }
    res.status(200).json({ message: "Review Accepted. Signature Logged." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`AXIONYX API Gateway running on port ${PORT}`);
});
