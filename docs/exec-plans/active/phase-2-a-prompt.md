# Agent Prompt: Phase 2 - CLI Interface

## Your Task
Create a CLI interface for TaskFlow that parses command-line arguments and dispatches to the store and formatter modules, with an executable entry point.

## Setup
```bash
git fetch origin
git worktree add .worktrees/phase-2-a -b feature/phase-2-a origin/feature/phase-2-a
cd .worktrees/phase-2-a
npm install
```

Work exclusively in this worktree. Do NOT rebase onto origin/main -- rebasing contaminates the feature branch with main's full history, making the PR diff unreadable. The branch was created from origin/main at decomposition time and already has everything it needs. When done, run `npm run verify` and create a PR.

## Context
TaskFlow is a minimal task management library using Node.js built-in test runner and ES modules with no external dependencies. The store (`src/store.js`) supports full CRUD: `addTask(title)`, `getTasks()`, `updateTask(id, updates)`, `deleteTask(id)`, and `clearAll()`. Tasks have `{ id, title, status, createdAt }`. The formatter (`src/formatter.js`) has `formatTask(task)` returning `[id] title (status)` and `formatTaskList(tasks)` returning newline-separated output or `"No tasks"`. This stream wires those modules into a command-line interface so users can interact with TaskFlow from their terminal.

## Files to Create/Modify
| File | Purpose |
|------|---------|
| `src/cli.js` | NEW - exports `run(args)` that parses args array, dispatches to store, returns formatted output string |
| `src/cli.test.js` | NEW - tests for each CLI command and error handling |
| `bin/taskflow.js` | NEW - executable entry point: calls `run(process.argv.slice(2))`, prints result |
| `package.json` | Add `"bin": { "taskflow": "./bin/taskflow.js" }` field |

## Reference Files to Read
| File | What to learn |
|------|---------------|
| `src/store.js` | Store API: `addTask(title)`, `getTasks()`, `updateTask(id, updates)`, `deleteTask(id)`, `clearAll()` |
| `src/formatter.js` | Formatter API: `formatTask(task)`, `formatTaskList(tasks)` |
| `src/store.test.js` | Test patterns: `describe`/`it` from `node:test`, `assert` from `node:assert`, `beforeEach` cleanup |
| `CLAUDE.md` | Project rules: Node.js built-in test runner, ES modules, no external deps |

## Key Design Requirements
- `run(args)` takes an array of strings (like `process.argv.slice(2)`) and returns a string
- Supported commands:
  - `add <title>` - calls `addTask(title)`, returns formatted confirmation (e.g., `Added: [1] Buy milk (todo)`)
  - `list` - calls `getTasks()`, returns `formatTaskList(tasks)`
  - `update <id> <field> <value>` - calls `updateTask(Number(id), { [field]: value })`, returns formatted result or error message
  - `delete <id>` - calls `deleteTask(Number(id))`, returns success/failure message
- Unknown commands return a usage/help string listing available commands
- `run(args)` must be a pure dispatcher (no console.log) for testability. The `bin/taskflow.js` entry point handles printing.
- `bin/taskflow.js` should have `#!/usr/bin/env node` shebang and be marked executable
- The `add` command should join all args after `add` as the title (e.g., `add Buy some milk` becomes title `"Buy some milk"`)

## Testing Strategy
- Test `run(['add', 'Buy', 'milk'])` returns string containing `Buy milk` and `todo`
- Test `run(['list'])` with no tasks returns `"No tasks"`
- Test `run(['list'])` after adding tasks returns formatted list
- Test `run(['update', '1', 'status', 'done'])` updates and returns confirmation
- Test `run(['update', '999', 'status', 'done'])` returns error message for missing task
- Test `run(['delete', '1'])` returns success message
- Test `run(['delete', '999'])` returns failure message for missing task
- Test `run([])` or `run(['unknown'])` returns usage/help text
- Use `beforeEach(() => clearAll())` for test isolation

## Acceptance Criteria
1. `npm run verify` passes
2. `run(args)` handles all four commands (add, list, update, delete) and returns strings
3. Unknown/missing commands return help text
4. `bin/taskflow.js` is executable with shebang and prints `run()` output
5. `package.json` has `"bin"` field
6. At least 8 test cases covering commands and error paths

## Do NOT Touch
- `src/persistence.js` (owned by Stream B)
- `src/persistence.test.js` (owned by Stream B)
- `src/store.js` (shared dependency, do not modify)
- `src/store.test.js` (do not modify)
- `src/formatter.js` (shared dependency, do not modify)
- `src/formatter.test.js` (do not modify)
