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

---

### Phase 2: CLI + Persistence

**Goal:** Make TaskFlow usable from the command line with persistent storage across sessions.

**Stream [A]: CLI Interface**
- [ ] Create `src/cli.js` with `run(args)` that parses an args array and dispatches to store functions
  - Commands: `add <title>`, `list`, `update <id> <field> <value>`, `delete <id>`
  - Returns output strings using the formatter (no direct console.log for testability)
- [ ] Create `src/cli.test.js` with tests for each command and error cases
- [ ] Create `bin/taskflow.js` as the executable entry point that calls `run(process.argv.slice(2))` and prints the result
- [ ] Add `"bin"` field to `package.json`
- [ ] `npm test` passes

**Stream [B]: JSON Persistence**
- [ ] Create `src/persistence.js` with `saveTasks(tasks, filepath)` and `loadTasks(filepath)`
  - Uses `node:fs` (writeFileSync, readFileSync)
  - JSON format with date serialization/deserialization
  - `loadTasks` returns empty array if file doesn't exist
- [ ] Create `src/persistence.test.js` with tests for save/load cycle, missing file, and date round-tripping
- [ ] `npm test` passes

**Parallel:** A and B are fully independent. A creates CLI files, B creates persistence files. Neither modifies existing source files.
**Merge gate:** `npm test` passes after merging both streams.

**Primary files:**
| Stream | Files |
|--------|-------|
| 2-A | `src/cli.js` (NEW), `src/cli.test.js` (NEW), `bin/taskflow.js` (NEW), `package.json` (bin field) |
| 2-B | `src/persistence.js` (NEW), `src/persistence.test.js` (NEW) |
