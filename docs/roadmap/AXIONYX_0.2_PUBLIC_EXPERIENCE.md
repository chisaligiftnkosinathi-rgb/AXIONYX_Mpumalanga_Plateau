# AXIONYX 0.2: The First Public Experience

**Objective:** Transform the internal AXIONYX Golden Demonstration into a customer-facing, interactive experience that proves the value of Operational Intelligence in 5 minutes.

## 1. Golden Demo Public Flow
The entry point for potential pilot partners and customers.
- **Hook:** "The journey between reality and decision disappears."
- **Interactive Sequence:**
  1. **Reality Enters:** A physical sample (coal or water) is documented.
  2. **Evidence Accumulates:** Verified facts (weight, quality, methods) append to the cryptographic ledger.
  3. **Knowledge Connects:** The raw data is contextualized against standards and historical baselines.
  4. **Decision Explained:** The final operational decision is rendered transparently (e.g., "Accepted because Ash < 15% and method verified").
  5. **Reality Replayed:** The user can scrub through the timeline of reality.

## 2. Human-Friendly Explainability
Move away from black-box "ACCEPTED/REJECTED" statuses. Expose the "Decision Card":
- **Why was this accepted?**
  - ✓ Measurement within tolerance
  - ✓ Analytical method verified
  - ✓ Laboratory review completed
- **Confidence:** HIGH
- **Evidence Trail:** Direct link back to the underlying 0.1 Reality Artifacts.

## 3. Customer Interaction Model & Lead Capture
The demo is not just a showcase; it is the entry point for the **AXIONYX Growth Engine**.
- **Interactive Prompts:** "Are you a laboratory or mining company?" -> "I want to understand how AXIONYX can help."
- **Opportunity Funnel (Deterministic Events):**
  1. `demo_viewed`
  2. `capability_understood`
  3. `business_interest_expressed`
  4. `opportunity_created`
This ensures all leads generated are fully context-aware before engaging sales.

## 4. API Infrastructure (`demo-api`)
The public frontend will not hardcode reality. It will consume a formal `packages/demo-api`:
- `GET /demonstrations/golden-path`
- `GET /demonstrations/{id}/timeline`
- `GET /demonstrations/{id}/evidence`
- `GET /demonstrations/{id}/explanation`

## 5. Proven Generality (The Second Reality)
To prove the engine is agnostic to the domain, AXIONYX 0.2 will introduce a second reality dataset:
`water-quality-sample-001.json`
This proves that whether tracking coal or water, the core translation mechanics remain identical.

## 6. Pilot Pathway
Once the customer completes the demo and generates a `business_interest_expressed` event, they are funneled into the Strategic Partnership Program (Sprint 1), transitioning from a digital lead into an active pilot engagement.
