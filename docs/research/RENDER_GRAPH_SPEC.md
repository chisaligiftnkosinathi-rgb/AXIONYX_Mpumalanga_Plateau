# AXIONYX Render Graph Specification
**Version:** 1.0

The Render Graph is the canonical intermediate representation bridging the AXIONYX Kernel's output (Scene Graph) and the Python Media Pipeline. 
It cleanly separates *what* happened (Evidence) from *how* it should look (Rendering).

## The Intermediate Architecture
```text
Evidence → Narrative Engine → Storyboard → Scene Graph → [ Render Graph ] → Render Plugins
```

## Specification Example
The Render Graph is declarative. Any renderer (MoviePy, Remotion, Blender) can parse this manifest.

```yaml
scene:
  id: drift_detected

layers:
  - background:
      type: video
      source: "generators/ai/b_roll_laboratory.mp4"
      
  - overlay:
      type: chart
      source: "generators/manim/instrument_drift_chart.mp4"
      position: [100, 100]
      
  - overlay:
      type: timeline
      source: "composer/templates/executive_timeline.py"
      
  - overlay:
      type: subtitles
      source: "subtitles/drift.srt"

narration:
  voice: "executive_male"
  text: "Instrument drift exceeded policy threshold."

camera:
  zoom: "instrument_panel"
  transition: "fade_in"

duration: 8.0
```

## Separation of Concerns
- **Generators** (`generators/image`, `generators/video`): Interface with fal.ai, Runway, and Manim to produce raw clips.
- **Composer** (`composer/`): Uses MoviePy to stack the `layers` array defined in the Render Graph perfectly onto the timeline.
- **Assets Registry** (`assets/`): All logos, fonts, and transitions are referenced by key in the Render Graph, keeping templates brand-agnostic until render time.
