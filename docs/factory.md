# TaskFlow Factory

A minimal task management CLI. Each phase adds a layer of functionality.

## Phase Plan

### Phase 1: Core Operations -- COMPLETE

**Goal:** Add update and delete operations to the task store, plus a formatter for display.

**Stream [A]: Store Operations -- COMPLETE**
- [x] Add `updateTask(id, updates)` to `src/store.js` - merges updates into existing task, returns updated task or null if not found
- [x] Add `deleteTask(id)` to `src/store.js` - removes task by id, returns true if found, false if not
- [x] Add tests for both functions in `src/store.test.js`
- [x] `npm test` passes

**Stream [B]: Display Formatter -- COMPLETE**
- [x] Create `src/formatter.js` with `formatTask(task)` - returns `[1] Buy milk (todo)`
- [x] Add `formatTaskList(tasks)` - returns multi-line string, one `formatTask` per line, with `"No tasks"` for empty list
- [x] Create `src/formatter.test.js` with tests for both functions
- [x] `npm test` passes

**Parallel:** A and B are fully independent. A modifies `src/store.js`, B creates `src/formatter.js`.
**Merge gate:** `npm test` passes after merging both streams.

**Primary files:**
| Stream | Files |
|--------|-------|
| 1-A | `src/store.js`, `src/store.test.js` |
| 1-B | `src/formatter.js` (NEW), `src/formatter.test.js` (NEW) |

**Synthesis Report (A, B merged):**

*What was delivered:*
- **A**: Tasks can now be modified after creation (update title, status) and removed from the store, enabling full CRUD lifecycle.
- **B**: Tasks can be rendered as human-readable strings for display, with single-task and list formatting including an empty-state message.

*Merge narrative:*
A merged first, then B. Zero conflicts - the streams were fully independent by design (A touched store.js, B created formatter.js). Clean parallel decomposition.

*What Phase 1 delivers:*
TaskFlow now has a complete task manipulation layer. Users can create, read, update, and delete tasks, and format them for display. This provides the foundation for building a CLI interface or any consumer that needs to present task state to users.
