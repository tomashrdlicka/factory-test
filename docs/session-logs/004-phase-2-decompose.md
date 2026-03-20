# Phase 2: CLI + Persistence Decomposed - 2026-03-20

**Phase:** phase-2 - CLI + Persistence
**Event:** decompose
**Streams:** A (CLI Interface), B (JSON Persistence)

## Phase goal
Make TaskFlow usable from the command line with persistent storage across sessions.

## How it was split
- **Stream A (CLI Interface):** Creates a CLI dispatcher that parses command-line args and wires them to the existing store and formatter. Independent because it only creates new files (`src/cli.js`, `src/cli.test.js`, `bin/taskflow.js`) and adds a `bin` field to `package.json`.
- **Stream B (JSON Persistence):** Creates a file-based save/load module for task serialization. Independent because it only creates new files (`src/persistence.js`, `src/persistence.test.js`) with no imports from the CLI.

## Dependencies
All independent. Stream A creates CLI files, Stream B creates persistence files. No shared file ownership. Both read from `src/store.js` and `src/formatter.js` but neither modifies them.

## Rationale
Natural split along concern boundaries: user interaction (CLI) vs data persistence (file I/O). Zero merge conflict risk since they create entirely different files. The only shared touch point is `package.json` (Stream A adds the `bin` field), but Stream B doesn't modify it. A future Phase 3 will wire persistence into the CLI for end-to-end stateful usage.
