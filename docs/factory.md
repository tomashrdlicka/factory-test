# TaskFlow Factory

A minimal task management CLI. Each phase adds a layer of functionality.

## Phase Plan

### Phase 1: Core Task Operations

**Goal:** Complete the task store with update/delete/filter operations and add a formatter module for display output.

**Stream [A]: Task Store Operations**
- [ ] Add `updateTask(id, updates)` - update title or status, return updated task or null if not found
- [ ] Add `deleteTask(id)` - remove task by id, return true/false
- [ ] Add `findById(id)` - find single task by id
- [ ] Add `filterByStatus(status)` - return tasks matching status
- [ ] Add tests for all new functions in `src/store.test.js`
- [ ] Ensure `npm test` passes

**Stream [B]: Display Formatter**
- [ ] Create `src/formatter.js` with `formatTask(task)` - returns single-line string like `[1] Buy milk (todo)`
- [ ] Add `formatTaskList(tasks)` - returns multi-line formatted string with header and count
- [ ] Add `formatStatus(status)` - returns status with visual indicator (e.g., `[ ] todo`, `[~] doing`, `[x] done`)
- [ ] Create `src/formatter.test.js` with tests for all functions
- [ ] Ensure `npm test` passes

**Parallel:** A and B are fully independent. A works on `src/store.js`, B creates `src/formatter.js`.
**Merge gate:** `npm test` passes after merging both streams.

**Primary files:**
| Stream | Files |
|--------|-------|
| 1-A | `src/store.js`, `src/store.test.js` |
| 1-B | `src/formatter.js` (NEW), `src/formatter.test.js` (NEW) |

---

### Phase 2: CLI Interface + Statistics

**Goal:** Add a CLI entry point that uses the store and formatter, plus a statistics module.

**Stream [A]: CLI Entry Point**
- [ ] Create `src/cli.js` - parse process.argv for commands: add, list, done, delete
- [ ] `add <title>` - creates a task, prints formatted confirmation
- [ ] `list [--status=todo|doing|done]` - lists tasks with optional filter
- [ ] `done <id>` - marks task as done
- [ ] `delete <id>` - deletes a task
- [ ] Add `"bin": { "taskflow": "src/cli.js" }` to package.json
- [ ] Create `src/cli.test.js` - test argument parsing logic (extract parse function for testability)
- [ ] Ensure `npm test` passes

**Stream [B]: Statistics Module**
- [ ] Create `src/stats.js` with `getStats(tasks)` - returns `{ total, todo, doing, done, completionRate }`
- [ ] Add `formatStats(stats)` - returns human-readable stats summary
- [ ] Create `src/stats.test.js` with tests for stats computation and formatting
- [ ] Edge cases: empty task list, all done, all todo
- [ ] Ensure `npm test` passes

**Parallel:** A and B are fully independent. A creates `src/cli.js`, B creates `src/stats.js`.
**Merge gate:** `npm test` passes after merging both streams. CLI commands work end-to-end.

**Primary files:**
| Stream | Files |
|--------|-------|
| 2-A | `src/cli.js` (NEW), `src/cli.test.js` (NEW), `package.json` (bin field) |
| 2-B | `src/stats.js` (NEW), `src/stats.test.js` (NEW) |

## Phase Ordering

```
Phase 1 ──> (core task operations + formatter)
Phase 2 ──> (CLI interface + statistics) [depends on Phase 1]
```
