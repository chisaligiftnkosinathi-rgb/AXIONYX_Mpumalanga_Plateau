# Gate 3 — Runtime Startup

**Date**: 2026-08-03

## Attempt 1
**Command**: `npx pnpm --filter @axionyx/reference-laboratory dev`
**Startup Time**: ~2s (crashed immediately)
**Status**: FAILED

### Failure Classification
| Category      | Description |
| ------------- | ----------- |
| Configuration | `ts-node` failed to compile `src/index.ts` due to missing type declarations for Node built-ins (`fs`, `path`, `__dirname`) and inability to resolve workspace module `@axionyx/event-bus/src/MemoryEventBus`. This indicates a missing or misconfigured `tsconfig.json` in the application root, causing `ts-node` to fall back to defaults that do not load `@types/node` or support workspace resolution. |

### Remediation Plan (One Fix)
Create a `tsconfig.json` in `apps/axionyx-reference-laboratory` extending the workspace root config, ensuring `node` types and `esModuleInterop` are enabled.

## Attempt 2
**Command**: `npx pnpm --filter @axionyx/reference-laboratory dev`
**Startup Time**: ~3s
**Status**: FAILED

### Failure Classification
| Category   | Description |
| ---------- | ----------- |
| Dependency | `Cannot find module '@axionyx/event-bus/src/MemoryEventBus'`. The `index.ts` file attempts to import a mocked `MemoryEventBus` directly from the `event-bus` internal paths, but the file is actually located at `src/providers/InMemoryEventBus.ts`. |
| Domain     | The current `src/index.ts` is merely a hardcoded CLI mock simulation (`mock_export.csv`, etc.). It does not initialize Fastify, PostgreSQL, MQTT, or actual runtime configuration. |

### Remediation Plan
This is not a simple syntax fix. The application entrypoint must be fundamentally rewritten to meet the definition of Gate 3 Success (Fastify starts, Postgres connects, MQTT connects). An Implementation Plan has been prepared for this architectural change.
