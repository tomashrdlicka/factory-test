# Agent Prompt: Phase 2 - JSON Persistence

## Your Task
Create a persistence module that saves and loads tasks to/from a JSON file, enabling TaskFlow to maintain state across sessions.

## Setup
```bash
git fetch origin
git worktree add .worktrees/phase-2-b -b feature/phase-2-b origin/feature/phase-2-b
cd .worktrees/phase-2-b
npm install
```

Work exclusively in this worktree. Do NOT rebase onto origin/main -- rebasing contaminates the feature branch with main's full history, making the PR diff unreadable. The branch was created from origin/main at decomposition time and already has everything it needs. When done, run `npm run verify` and create a PR.

## Context
TaskFlow is a minimal task management library using Node.js built-in test runner and ES modules with no external dependencies. Tasks are objects with `{ id, title, status, createdAt }` where `createdAt` is a `Date`. Currently everything is in-memory only, so tasks are lost when the process exits. This stream adds a file-based persistence layer that can serialize tasks to JSON and deserialize them back, preserving all fields including dates. This module is standalone and will be wired into the CLI in a future phase.

## Files to Create/Modify
| File | Purpose |
|------|---------|
| `src/persistence.js` | NEW - exports `saveTasks(tasks, filepath)` and `loadTasks(filepath)` |
| `src/persistence.test.js` | NEW - tests for save/load cycle, missing file handling, date round-tripping |

## Reference Files to Read
| File | What to learn |
|------|---------------|
| `src/store.js` | Task object shape: `{ id, title, status, createdAt }` where `createdAt` is a `Date` |
| `src/store.test.js` | Test patterns: `describe`/`it` from `node:test`, `assert` from `node:assert` |
| `CLAUDE.md` | Project rules: Node.js built-in test runner, ES modules, no external deps |

## Key Design Requirements
- `saveTasks(tasks, filepath)` writes the tasks array to the given filepath as JSON
  - Uses `node:fs` `writeFileSync` with UTF-8 encoding
  - JSON should be pretty-printed (2-space indent) for human readability
- `loadTasks(filepath)` reads and parses the JSON file, returning the tasks array
  - If the file doesn't exist, return an empty array (don't throw)
  - Must convert `createdAt` strings back to `Date` objects (JSON.parse reviver or post-processing)
- Both functions are synchronous (appropriate for a CLI tool)
- No external dependencies, only `node:fs` and `node:path`

## Testing Strategy
- Test save then load round-trip: save tasks, load them back, verify all fields match
- Test `loadTasks` on a non-existent file returns `[]`
- Test date round-tripping: save a task with a `Date`, load it back, verify `createdAt instanceof Date`
- Test saving an empty array and loading it back
- Test that the saved file is valid JSON (read raw, JSON.parse it)
- Use temporary files for test isolation: create a temp directory in `beforeEach`, clean it up in `afterEach`
  - Use `node:fs` `mkdtempSync` and `node:os` `tmpdir()` for temp dirs
  - Use `node:fs` `rmSync` with `{ recursive: true }` for cleanup

## Acceptance Criteria
1. `npm run verify` passes
2. `saveTasks(tasks, filepath)` writes valid, pretty-printed JSON
3. `loadTasks(filepath)` returns `[]` for missing files
4. `loadTasks` correctly deserializes `createdAt` back to `Date` objects
5. Full round-trip preserves all task fields including dates
6. At least 5 test cases covering happy paths and edge cases

## Do NOT Touch
- `src/cli.js` (owned by Stream A)
- `src/cli.test.js` (owned by Stream A)
- `bin/taskflow.js` (owned by Stream A)
- `src/store.js` (shared dependency, do not modify)
- `src/store.test.js` (do not modify)
- `src/formatter.js` (shared dependency, do not modify)
- `src/formatter.test.js` (do not modify)
- `package.json` (modified by Stream A)
