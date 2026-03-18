# Phase 1: Core Operations Decomposed - 2026-03-18

**Phase:** phase-1 - Core Operations
**Event:** decompose
**Streams:** A (Store Operations), B (Display Formatter)

## Phase goal
Add update and delete operations to the task store, plus a formatter for display.

## How it was split
- **Stream A (Store Operations):** Adds `updateTask` and `deleteTask` to the existing store module. Independent because it only modifies `src/store.js` and `src/store.test.js`.
- **Stream B (Display Formatter):** Creates a new formatter module with `formatTask` and `formatTaskList`. Independent because it creates new files (`src/formatter.js`, `src/formatter.test.js`) and needs no imports from the store.

## Dependencies
All independent. Stream A modifies existing files, Stream B creates new files. No shared file ownership.

## Rationale
Natural split along file boundaries. Stream A extends the data layer, Stream B adds a presentation layer. Zero merge conflict risk since they touch completely separate files.
