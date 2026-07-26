# AXIONYX Translation Engine
**The Content Factory Architecture**

The Translation Engine is responsible for projecting frozen AXIONYX reality artifacts (e.g., `coal-sample-001.json`) into human-consumable media formats (videos, academy lessons, technical walkthroughs) using AI-assisted production.

## Core Principle
> **AI tools generate presentation. They do not generate truth.**

Generative AI (Gemini, Veo, etc.) acts as a *renderer*, not an author. Every scene, narration line, and visual must map directly back to a cryptographic Evidence Reference in the source reality dataset.

## The Pipeline

1. **Translation Compiler**: Converts the frozen dataset and the markdown narrative contracts into a structured intermediate JSON representation (the `Scene` schema).
2. **AI Production Layer**: Prompts GenAI tools using strict visual descriptions and approved narration text to render MP4 clips, voiceovers, and diagrams.
3. **Evidence Validator**: A deterministic quality gate. If the AI output contradicts the canonical dataset (e.g., claiming "the sample was unsafe" when the dataset says "ACCEPTED"), the asset is rejected.

## Directory Structure
- `src/schema.ts`: TypeScript definitions for the intermediate Translation Pipeline formats.
- `src/schemas/scene.schema.json`: JSON Schema representation for interoperability.
- `prompts/`: Approved AI prompt templates ensuring brand safety and mathematical accuracy.
