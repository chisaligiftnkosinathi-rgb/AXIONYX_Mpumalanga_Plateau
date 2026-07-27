# LIVE OBSERVATION LAYER
**Crystal ID:** OBSERVATION_LAYER_STANDARD_001
**Domain:** Scientific Event Pipeline
**Date Minted:** 2026-07-27

## Foundation of Observation
AXIONYX is a Scientific Event Pipeline:
`Physical World → Observation Layer → Evidence Layer (OVL) → Knowledge Layer → Decision Layer → Approval Layer → Execution Layer → Learning Layer`

## The Immutable Event
Every observation is an immutable record. Nothing edits observations; corrections produce new observations.
An observation is distinct from evidence.
- **Observation**: "The instrument reported X."
- **Evidence**: "We have confidence the observation is reliable."

## Time as First-Class Data
Events must track causality through time:
- `occurredAt`: When the physical event happened.
- `receivedAt`: When the system ingested it.
- `validatedAt`: When the OVL processed it.
- `processedAt`: When it affected intelligence.

## Canonical Envelope
All adapters (LIMS, OPC UA, SCADA) must wrap their output in the Canonical Observation Envelope (Metadata, Payload, Provenance, Evidence).
