# Agent Prompt: Phase 1 - Store Operations

## Your Task
Add `updateTask(id, updates)` and `deleteTask(id)` to the in-memory task store, with full test coverage.

## Setup
```bash
git fetch origin
git worktree add .worktrees/phase-1-a -b feature/phase-1-a origin/feature/phase-1-a
cd .worktrees/phase-1-a
npm install
```

Work exclusively in this worktree. Do NOT rebase onto origin/main -- rebasing contaminates the feature branch with main's full history, making the PR diff unreadable. The branch was created from origin/main at decomposition time and already has everything it needs. When done, run `npm run verify` and create a PR.

## Context
TaskFlow is a minimal task management library using Node.js built-in test runner and ES modules with no external dependencies. The store (`src/store.js`) currently has `addTask(title)`, `getTasks()`, and `clearAll()`. Tasks have `id`, `title`, `status` ('todo' | 'doing' | 'done'), and `createdAt`. This stream adds mutation operations so tasks can be modified and removed after creation.

## Files to Create/Modify
| File | Purpose |
|------|---------|
| `src/store.js` | Add `updateTask(id, updates)` and `deleteTask(id)` exports |
| `src/store.test.js` | Add tests for both new functions |

## Reference Files to Read
| File | What to learn |
|------|---------------|
| `src/store.js` | Current store API, task shape, internal `tasks` array and `nextId` counter |
| `src/store.test.js` | Existing test patterns, imports, `beforeEach` cleanup via `clearAll()` |
| `CLAUDE.md` | Project rules: Node.js built-in test runner, ES modules, no external deps |

## Key Design Requirements
- `updateTask(id, updates)` merges `updates` into the existing task object (e.g., `Object.assign` or spread). Returns the updated task, or `null` if no task with that `id` exists.
- `deleteTask(id)` removes the task from the internal array. Returns `true` if the task was found and removed, `false` if not found.
- Both functions must work with the numeric `id` field on tasks.
- Do not modify `addTask`, `getTasks`, or `clearAll`.

## Testing Strategy
- Test `updateTask`:
  - Updates title of an existing task, verify the returned task has new title
  - Updates status of an existing task (e.g., 'todo' to 'done')
  - Returns `null` for a non-existent id
  - Verify the update is reflected in `getTasks()`
- Test `deleteTask`:
  - Deletes an existing task, verify `getTasks()` no longer includes it
  - Returns `true` when task is found
  - Returns `false` for a non-existent id
- Use `beforeEach(() => clearAll())` consistent with existing tests

## Acceptance Criteria
1. `npm run verify` passes
2. `updateTask(id, updates)` merges updates and returns updated task or null
3. `deleteTask(id)` removes task and returns boolean
4. All new functions are exported from `src/store.js`
5. At least 6 new test cases covering happy paths and edge cases

## Do NOT Touch
- `src/formatter.js` (owned by Stream B)
- `src/formatter.test.js` (owned by Stream B)
