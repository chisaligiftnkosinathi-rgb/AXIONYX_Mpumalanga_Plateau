# ADR-002: Capability Adapter Pattern

**Status:** Accepted
**Date:** 2026-07-24
**Context:** AXIONYX v2.0 Infrastructure Abstraction

## Context
As AXIONYX scales from laboratory pilots to enterprise deployments, it will encounter diverse cloud environments (Google Cloud, AWS, local air-gapped servers, edge devices). Hardcoding dependencies on specific vendor APIs (e.g., Firebase, BigQuery) into the Kernel would violate our foundational philosophy of domain isolation.

## Decision
We establish the **Capability Adapter Pattern** as the definitive infrastructure boundary.
1. The **AXIONYX Kernel** owns all business logic, intelligence, and domain models.
2. **Infrastructure Providers** (Google, GitHub, Vercel, Local) only supply *capabilities*.
3. Providers must implement strict interfaces (`IRealityBus`, `ITranslationLayer`, etc.) defined in `@axionyx/infrastructure-adapters`.
4. The Kernel requests capabilities dynamically via the `@axionyx/infrastructure-registry`.

## Consequences
- The Kernel is mathematically insulated from vendor lock-in.
- An analytical laboratory running completely offline can use `@axionyx/local` (SQLite, MQTT, Ollama) while maintaining the exact same AXIONYX Kernel logic as a global mining operation using `@axionyx/google` (PubSub, BigQuery, Gemini).
- AI Models (e.g., Gemini, Claude) are strictly constrained behind `ITranslationLayer`, ensuring they act as explanation formatters, not decision-makers.
