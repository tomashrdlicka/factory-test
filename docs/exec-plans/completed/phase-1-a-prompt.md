# Agent Prompt: Phase 1 - Calculator Operations

## Your Task
Implement `subtract()`, `multiply()`, and `divide()` functions in the calculator module, with full test coverage using Node.js built-in test runner.

## Setup
```bash
git fetch origin
git worktree add .worktrees/phase-1-a -b feature/phase-1-a origin/feature/phase-1-a
cd .worktrees/phase-1-a
npm install
```

Work exclusively in this worktree. Do NOT rebase onto origin/main -- rebasing contaminates the feature branch with main's full history, making the PR diff unreadable. The branch was created from origin/main at decomposition time and already has everything it needs. When done, run `npm run verify` and create a PR.

## Context
This is a simple Node.js utility library with two modules: calculator and formatter. The calculator module (`src/calculator.js`) currently only has an `add(a, b)` function. You need to add the remaining arithmetic operations. The project uses ES modules and the Node.js built-in test runner (`node:test`). There are no external dependencies. The existing test file (`src/calculator.test.js`) has tests for `add()` that demonstrate the testing patterns to follow.

## Files to Create/Modify
| File | Purpose |
|------|---------|
| `src/calculator.js` | Add `subtract()`, `multiply()`, `divide()` functions |
| `src/calculator.test.js` | Add tests for all three new functions |

## Reference Files to Read
| File | What to Learn |
|------|---------------|
| `src/calculator.js` | Existing `add()` function pattern and module structure |
| `src/calculator.test.js` | Existing test patterns (imports, describe/it structure, assert usage) |
| `package.json` | Test runner configuration and scripts |
| `CLAUDE.md` | Project rules and constraints |

## Key Design Requirements
- `subtract(a, b)` returns `a - b`
- `multiply(a, b)` returns `a * b`
- `divide(a, b)` returns `a / b`
- `divide(a, 0)` must throw an error (e.g., `throw new Error('Division by zero')`)
- All functions should be named exports (ES module style)
- Follow the same code style as the existing `add()` function

## Testing Strategy
- Use `node:test` (`describe`, `it`) and `node:assert` (`strictEqual`, `throws`)
- Test each function with: positive numbers, negative numbers, zero
- Test `divide` specifically for division by zero (assert it throws)
- Test `divide` with decimal results
- Follow the existing test structure in `calculator.test.js`

## Acceptance Criteria
1. `npm run verify` passes
2. `subtract(5, 3)` returns `2`
3. `multiply(4, 5)` returns `20`
4. `divide(10, 2)` returns `5`
5. `divide(1, 0)` throws an error
6. All new functions are exported from `src/calculator.js`
7. All new functions have at least 3 test cases each

## Do NOT Touch
- `src/formatter.js` (owned by Stream B)
- `src/formatter.test.js` (owned by Stream B)
- `package.json`
- `CLAUDE.md`
