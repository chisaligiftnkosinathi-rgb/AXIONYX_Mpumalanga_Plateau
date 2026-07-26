# AXIONYX × Cartrack Collaboration Pilot

**AXIONYX Vehicle Intelligence Layer: Turning connected vehicle data into explainable maintenance intelligence.**

---

## 1. Problem Statement
Fleet companies and consumers collect vast amounts of telemetry—GPS data, mileage, driving behavior, and alerts. Yet, when an anomaly occurs, customers are left with raw data and unresolved questions:
- Why is my vehicle behaving differently?
- What maintenance should happen?
- Is this issue urgent?
- Which workshop can solve it?
- What evidence supports this recommendation?

Existing telematics platforms track where vehicles are. They struggle to explain *what vehicles need*.

## 2. Innovation Thesis
AXIONYX proposes a Collaboration Layer: **The AI Car Doctor**. 

The AI Car Doctor is not a black-box AI mechanic. It is an explainable decision-support translator that bridges raw telemetry with human expertise. 
It converts:
`Vehicle Telemetry -> AI Car Doctor -> Explainable Diagnosis -> Recommended Action -> Service Opportunity`

## 3. Demo Storyboard
The pilot will demonstrate a deterministic vehicle event translation using a frozen reality artifact (`vehicle-sample-001.json`).

1. **Vehicle Reality**: A Suzuki Ertiga (145,000 km) records a `temperature_pattern_changed` event.
2. **Translation**: The AXIONYX Content Factory synthesizes the evidence (temperature readings + maintenance history).
3. **Explanation Rendered**: *"The vehicle has shown a repeated temperature pattern outside its normal operating range. Based on historical maintenance evidence, inspection of the cooling system is recommended."*
4. **Service Opportunity**: The system orchestrates a targeted commercial opportunity, connecting the driver with a verified Cartrack-partnered workshop.

## 4. API Concept
The engine will expose a targeted `vehicle-intelligence` package:
- `GET /vehicles/{id}/health/timeline`
- `GET /vehicles/{id}/health/evidence`
- `GET /vehicles/{id}/health/explanation`
- `POST /vehicles/{id}/service-opportunity`

## 5. Pilot Milestones (90 Days)
1. **Deliver AI Car Doctor Demonstration**: An offline-executable translation pipeline mapping telemetry to diagnosis.
2. **Deliver Explainable Vehicle Reports**: Human-readable, evidence-backed PDFs and UIs explaining the diagnosis.
3. **Maintenance Opportunity Engine**: Routing diagnosed needs to a trusted service provider logic flow.
4. **Customer Education Content**: Automated content generation explaining *why* a repair is necessary based on telemetry.

## 6. Commercial Model
The AI Car Doctor sits on top of Cartrack's telemetry network.
- **For Cartrack Customers**: Increased platform engagement, reduced maintenance uncertainty, and preventative failure visibility.
- **For Cartrack**: A new premium tier ("Understand your fleet"), increased customer stickiness, and monetization through automated, trusted maintenance lead generation for partnered workshops.
