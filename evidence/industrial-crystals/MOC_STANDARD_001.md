# MISSION, OBJECTIVES & CONSTRAINTS (MOC) ENGINE
**Crystal ID:** MOC_STANDARD_001
**Domain:** Action Verification & Intelligence
**Date Minted:** 2026-07-27

## Foundation of Objective-Driven Action
Decisions are never made in a vacuum. AXIONYX actions are driven by explicit objectives within defined constraints, following a strict hierarchy:
`Mission → Objectives → Constraints → KPIs → Decision Policies`

## First-Class Versioning
Every element of the MOC hierarchy is an immutable, versioned record. This guarantees historical replayability (answering "Why did the system act this way on this date?").

## Two-Phase Evaluation
The MOC engine strictly separates Hard Constraints from Soft Optimization:
1. **Hard Constraints (Safety, Compliance, Equipment Limits):** Evaluated strictly as Boolean. Any violation immediately rejects the action.
2. **Soft Optimization (Cost, Throughput):** Evaluated as weighted scores to rank valid actions. **Safety is never scored.**

## Explainability Protocol
Every action produced by the Decision Engine must output a 5-Point Explanation:
1. What was observed?
2. What evidence supports this?
3. Which mission is being optimized?
4. Why was this action selected?
5. What is the confidence level?
