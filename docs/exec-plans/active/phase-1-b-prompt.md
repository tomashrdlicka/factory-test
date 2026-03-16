# Agent Prompt: Phase 1 - Formatter Functions

## Your Task
Implement `formatCurrency()`, `formatPercent()`, and `formatDate()` functions in the formatter module, with full test coverage using Node.js built-in test runner.

## Setup
```bash
git fetch origin
git worktree add .worktrees/phase-1-b -b feature/phase-1-b origin/feature/phase-1-b
cd .worktrees/phase-1-b
npm install
```

Work exclusively in this worktree. Do NOT rebase onto origin/main -- rebasing contaminates the feature branch with main's full history, making the PR diff unreadable. The branch was created from origin/main at decomposition time and already has everything it needs. When done, run `npm run verify` and create a PR.

## Context
This is a simple Node.js utility library with two modules: calculator and formatter. The formatter module (`src/formatter.js`) currently only has a `formatNumber(n)` function. You need to add three new formatting functions: currency, percentage, and date. The project uses ES modules and the Node.js built-in test runner (`node:test`). There are no external dependencies. The existing test file (`src/formatter.test.js`) has a basic test for `formatNumber()` that demonstrates the testing pattern.

## Files to Create/Modify
| File | Purpose |
|------|---------|
| `src/formatter.js` | Add `formatCurrency()`, `formatPercent()`, `formatDate()` functions |
| `src/formatter.test.js` | Add tests for all three new functions |

## Reference Files to Read
| File | What to Learn |
|------|---------------|
| `src/formatter.js` | Existing `formatNumber()` function pattern and module structure |
| `src/formatter.test.js` | Existing test patterns (imports, describe/it structure, assert usage) |
| `package.json` | Test runner configuration and scripts |
| `CLAUDE.md` | Project rules and constraints |

## Key Design Requirements
- `formatCurrency(amount, currency)` - formats a number as currency string
  - `formatCurrency(42.5, 'USD')` returns `'$42.50'`
  - `formatCurrency(42.5, 'EUR')` returns `'€42.50'`
  - Use `Intl.NumberFormat` with `style: 'currency'` for locale-aware formatting
- `formatPercent(value)` - formats a decimal as percentage string
  - `formatPercent(0.42)` returns `'42%'`
  - `formatPercent(1)` returns `'100%'`
  - Round to nearest integer
- `formatDate(date)` - formats a Date object as YYYY-MM-DD string
  - `formatDate(new Date(2024, 0, 15))` returns `'2024-01-15'`
  - Use UTC methods or `toISOString().split('T')[0]` to avoid timezone issues
- All functions should be named exports (ES module style)
- No external dependencies - use built-in `Intl` and `Date` APIs only

## Testing Strategy
- Use `node:test` (`describe`, `it`) and `node:assert` (`strictEqual`, `ok`)
- `formatCurrency`: test USD, EUR; test rounding (e.g., 42.555); test whole numbers
- `formatPercent`: test fractional values, zero, 1 (100%), values > 1
- `formatDate`: test various dates; test single-digit months/days get zero-padded
- Follow the existing test structure in `formatter.test.js`

## Acceptance Criteria
1. `npm run verify` passes
2. `formatCurrency(42.5, 'USD')` returns `'$42.50'`
3. `formatPercent(0.42)` returns `'42%'`
4. `formatDate(new Date(2024, 0, 15))` returns `'2024-01-15'`
5. All new functions are exported from `src/formatter.js`
6. All new functions have at least 3 test cases each

## Do NOT Touch
- `src/calculator.js` (owned by Stream A)
- `src/calculator.test.js` (owned by Stream A)
- `package.json`
- `CLAUDE.md`
