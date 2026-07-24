# AXIONYX Demo Package Specification
**Version:** 1.0

A Demo Package is a portable artifact that makes demonstrations reproducible, replayable, and observable. It decouples the visual presentation from the underlying event state, allowing the AXIONYX Replay Center to dynamically rebuild operational reality based on the scrubber's position.

## Directory Structure

```text
demo-package/
├── manifest.yaml           # Core metadata (domain, scenario, audience, authors)
├── events.json             # The raw immutable event stream (The Source of Truth)
├── projections/            # Cached state required for UI rendering
│   ├── timeline.json
│   ├── dashboard.json
│   └── digital-twin.json
├── media/                  # Orchestrated content assets
│   ├── video.mp4           # The primary visual presentation
│   ├── thumbnail.png
│   ├── narration.mp3
│   └── captions.srt
├── documents/              # Immutable audit and knowledge outputs
│   ├── audit.pdf
│   ├── executive-summary.pdf
│   ├── storyboard.md
│   └── academy-lesson.md
└── metadata/               # Telemetry and analytics tracking
    ├── metrics.json
    ├── tags.json
    └── versions.json
```

## The Single Source of Truth
The `events.json` file is passed to the `JsonEventStoreAdapter`. The Replay Center does NOT replay a "recording" of a dashboard. It feeds these events into the actual AXIONYX Projection Engine, meaning the Digital Twin and Mission Control update identically to how they did in production.
