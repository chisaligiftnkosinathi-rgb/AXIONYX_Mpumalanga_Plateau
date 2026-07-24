# ADR 0003: Deterministic Policy Engine

**Context:** AXIONYX must pause workflows or issue alerts based on complex business logic (e.g., ISO 17025 rules). Hardcoding this logic makes the system rigid.
**Decision:** Extract all business rules into a standalone, declarative Policy Engine evaluating the AST (Abstract Syntax Tree) of cryptographic evidence.
**Consequences:** The Kernel remains completely agnostic to the operational domain. Policies can be versioned and applied dynamically.
**Alternatives Considered:** Hardcoded workflow rules (Rejected due to lack of extensibility across diverse industries like Mining and Healthcare).
