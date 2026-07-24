---
document:
  name: AXIONYX Ecosystem Map
  version: 2.1
  status: canonical
  owner: AXIONYX Architecture Board
  last_reviewed: 2026-07-24
---

# The AXIONYX Canonical Ecosystem Map

This document defines the permanent structure of the AXIONYX platform.

AXIONYX is not a single monolith. It is a strictly layered ecosystem designed to separate the "physics" of intelligence (Kernel) from the infrastructure it runs on, the enterprise systems it speaks to, and the domains it understands.

## Ecosystem Hierarchy

```text
AXIONYX Ecosystem

Kernel
│
├── Infrastructure Layer
│     Google Adapter (@axionyx/google)
│     Supabase Adapter (@axionyx/supabase)
│     Railway Adapter (@axionyx/railway)
│     Vercel Adapter (@axionyx/vercel)
│     GitHub Adapter (@axionyx/github)
│     Local Adapter (@axionyx/local)
│
├── Enterprise Integration Layer
│     Scientific Knowledge Platform (formerly AXIS API)
│     iPhande API (Opportunity Engine)
│     iSebenza API (Workforce Twin)
│     ERP Webhooks
│     LIMS Connections
│
├── Domain Intelligence Layer
│     Laboratory Intelligence
│     Mining Intelligence
│     Finance Intelligence (Evidence Engine & Double-Entry Ledger)
│     Governance Intelligence
│     Municipality Intelligence
│     Observatory
│
├── Research Layer
│     Reality Exchange
│     Simulation Exchange
│     Publications
│     Experiments
│     Validation
│
├── SDKs
│     TypeScript
│     Python
│     REST API
│
└── Applications
      Academy
      Marketplace
      Command Center
      Validation Center
      Documentation Portal
```

### 1. The Kernel
The AXIONYX Kernel is feature-complete and governed by strict Architecture Decision Records (ADRs). It contains the core engines: Reality, Evidence, Relationship, Trust, Timeline, Explanation, Simulation, and Mission. 

### 2. The Infrastructure Layer
The AXIONYX Kernel owns the business logic. Providers only supply capabilities. The Kernel communicates with these providers strictly through the `Infrastructure Registry` using abstract interfaces (`IRealityBus`, `ITranslationLayer`, etc.).

### 3. The Enterprise Integration Layer
The boundary where AXIONYX interfaces with the existing software world. These packages translate external APIs and Webhooks into AXIONYX Telemetry and Evidence.

### 4. The Domain Intelligence Layer
The flagship models that represent human and industrial systems. For example, `laboratory-intelligence` encodes the rules of ISO 17025, and `finance-intelligence` encodes the mathematics of double-entry accounting. 

### 5. The Research Layer
The scientific workbench where hypotheses are tested, evidence is validated, and findings are published to the global Reality Exchange as certified knowledge.
