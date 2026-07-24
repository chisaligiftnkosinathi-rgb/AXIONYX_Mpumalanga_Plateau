# ADR-001: The Reality Primitive

**Status:** Accepted
**Date:** 2026-07-24
**Context:** AXIONYX v2.0 Architecture Governance

## Context
AXIONYX is transitioning from an exploratory architectural project into a stable, commercial validation platform (v2.0). To ensure the stability of the core engines, we must formally define the foundational primitives that all future packages rely upon.

## Decision
We formally adopt the **Reality Primitive** as the absolute foundation of the AXIONYX architecture.
The system will not model assumed states. The system will only model Reality → Telemetry → Evidence.

## Consequences
- No Digital Twin can be constructed without a verified Telemetry pipeline mapping to physical reality.
- "Unknown" must be treated as a first-class state. Absence of evidence is not evidence of absence.
- Any new features requiring inference must be built on top of the Explanation Engine, explicitly tagging inferences as separate from observed Reality.
