# Agent Prompt: Phase 1 - Display Formatter

## Your Task
Create `src/formatter.js` with `formatTask(task)` and `formatTaskList(tasks)` functions for human-readable task display, with full test coverage.

## Setup
```bash
git fetch origin
git worktree add .worktrees/phase-1-b -b feature/phase-1-b origin/feature/phase-1-b
cd .worktrees/phase-1-b
npm install
```

Work exclusively in this worktree. Do NOT rebase onto origin/main -- rebasing contaminates the feature branch with main's full history, making the PR diff unreadable. The branch was created from origin/main at decomposition time and already has everything it needs. When done, run `npm run verify` and create a PR.

## Context
TaskFlow is a minimal task management library using Node.js built-in test runner and ES modules with no external dependencies. Tasks have `id` (number), `title` (string), `status` ('todo' | 'doing' | 'done'), and `createdAt` (Date). This stream creates a display layer that formats tasks for human-readable output, independent of the store itself.

## Files to Create/Modify
| File | Purpose |
|------|---------|
| `src/formatter.js` | NEW - `formatTask(task)` and `formatTaskList(tasks)` exports |
| `src/formatter.test.js` | NEW - Tests for both formatter functions |

## Reference Files to Read
| File | What to learn |
|------|---------------|
| `src/store.js` | Task object shape: `{ id, title, status, createdAt }` |
| `src/store.test.js` | Test patterns, imports from `node:test` and `node:assert` |
| `CLAUDE.md` | Project rules: Node.js built-in test runner, ES modules, no external deps |

## Key Design Requirements
- `formatTask(task)` takes a task object and returns a string in the format: `[{id}] {title} ({status})`
  - Example: `[1] Buy milk (todo)`
- `formatTaskList(tasks)` takes an array of tasks and returns a multi-line string with one `formatTask` output per line
  - For an empty array, return the string `"No tasks"`
  - Lines are joined with `\n`
- Pure functions, no side effects, no imports from store.js needed

## Testing Strategy
- Test `formatTask`:
  - Formats a todo task correctly
  - Formats a done task correctly
  - Handles tasks with different ids
- Test `formatTaskList`:
  - Returns `"No tasks"` for an empty array
  - Formats a single task
  - Formats multiple tasks with newline separation
- Create task objects directly in tests (no need to import store)

## Acceptance Criteria
1. `npm run verify` passes
2. `formatTask(task)` returns `[{id}] {title} ({status})`
3. `formatTaskList([])` returns `"No tasks"`
4. `formatTaskList(tasks)` returns newline-separated formatted tasks
5. At least 5 test cases covering both functions

## Do NOT Touch
- `src/store.js` (owned by Stream A)
- `src/store.test.js` (owned by Stream A)
