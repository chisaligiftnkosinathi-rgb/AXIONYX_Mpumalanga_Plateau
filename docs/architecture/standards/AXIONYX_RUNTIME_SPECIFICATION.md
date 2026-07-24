# AXIONYX Runtime Specification (v1.0)

Every service, worker, gateway, and simulator within the AXIONYX ecosystem must comply with the Runtime Specification. This ensures the Deployment Digital Twin can observe, orchestrate, and govern the infrastructure uniformly regardless of the underlying technology stack (Node.js, Rust, Python, Go).

## 1. Operational Endpoints

Every HTTP-capable service MUST expose the following operational endpoints. Non-HTTP services (e.g., pure MQTT workers) MUST expose an HTTP administration server on port `8080`.

| Endpoint | Purpose | Expected Response |
| :--- | :--- | :--- |
| `/health` | Aggregate status combining readiness and liveness. | `200 OK` or `503 Service Unavailable` |
| `/readiness` | True if the service is ready to receive traffic (DB connected, EventBus connected). | `200 OK` or `503 Service Unavailable` |
| `/liveness` | True if the process is running and not deadlocked. | `200 OK` or `500 Internal Server Error` |
| `/metrics` | Prometheus-compatible metrics exposition. | `text/plain; version=0.0.4` |
| `/version` | Build information, git commit hash, and semantic version. | `application/json` |

## 2. The AXIONYX Manifest

Every service MUST expose its AXIONYX System Manifest. This allows the Deployment Digital Twin to perform automated service discovery, capability mapping, and ontology enforcement.

**Endpoint**: `GET /.well-known/axionyx/manifest`

**Example Response**:
```json
{
  "service": "scientific-knowledge-platform",
  "version": "2.2.0",
  "capabilities": [
    "Laboratory",
    "Evidence",
    "Measurements"
  ],
  "health": "/health",
  "metrics": "/metrics",
  "workflowVersion": "1.0",
  "ontologyVersion": "2.2",
  "standards": [
    "ISO 17025"
  ]
}
```

## 3. Observability Standards

- **Tracing**: All services MUST emit OpenTelemetry traces. Trace contexts (e.g., `traceparent` headers) MUST be propagated across HTTP, MQTT, and Redis boundaries.
- **Logging**: All services MUST log in structured JSON format to `stdout`. Logs MUST include the `trace_id`, `service_name`, and `environment`.
- **Metrics**: Standard golden signals (Latency, Traffic, Errors, Saturation) MUST be exposed via `/metrics`.
