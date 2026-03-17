# TaskFlow Factory

A minimal task management CLI. Each phase adds a layer of functionality.

## Phase Plan

### Phase 1: Core Operations

**Goal:** Add update and delete operations to the task store, plus a formatter for display.

**Stream [A]: Store Operations**
- [ ] Add `updateTask(id, updates)` to `src/store.js` - merges updates into existing task, returns updated task or null if not found
- [ ] Add `deleteTask(id)` to `src/store.js` - removes task by id, returns true if found, false if not
- [ ] Add tests for both functions in `src/store.test.js`
- [ ] `npm test` passes

**Stream [B]: Display Formatter**
- [ ] Create `src/formatter.js` with `formatTask(task)` - returns `[1] Buy milk (todo)`
- [ ] Add `formatTaskList(tasks)` - returns multi-line string, one `formatTask` per line, with `"No tasks"` for empty list
- [ ] Create `src/formatter.test.js` with tests for both functions
- [ ] `npm test` passes

**Parallel:** A and B are fully independent. A modifies `src/store.js`, B creates `src/formatter.js`.
**Merge gate:** `npm test` passes after merging both streams.

**Primary files:**
| Stream | Files |
|--------|-------|
| 1-A | `src/store.js`, `src/store.test.js` |
| 1-B | `src/formatter.js` (NEW), `src/formatter.test.js` (NEW) |
