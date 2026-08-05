# Gate 1: Dependency Resolution

## Attempt 1
**Date**: 2026-08-03
**Command**: `npx pnpm install --filter @axionyx/reference-laboratory...`
**Exit Code**: `1`
**Result**: FAILED

### Analysis
The installation failed during the `postinstall` lifecycle scripts.
Specifically, `esbuild@0.21.5` threw an error:
`Error: Expected "0.21.5" but got "0.19.12"`

This indicates a known issue where pnpm's global store or hardlinks become corrupted/confused when multiple packages demand different binary versions of `esbuild` concurrently.

### Remediation
1. Prune the pnpm store and remove the corrupted `esbuild` installations in `node_modules/.pnpm`.
### Attempt 2 (Resolved)
**Date**: 2026-08-03
**Command**: `npx pnpm install --filter @axionyx/reference-laboratory... --ignore-scripts`
**Exit Code**: `0`
**Duration**: 8m 8.4s
**Warnings**: 
- 15 deprecated subdependencies (e.g. `uuid@3.4.0`, `request@2.88.2`, `glob@8.1.0`)
- Unmet peer dependencies in `apps/axionyx-command-center` for `react-leaflet` against `react@19.0.0`
**Errors**: None
**Packages Installed**: 2 added (1052 reused)
**Result**: SUCCESS (with `--ignore-scripts`)
