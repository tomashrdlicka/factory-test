# Factory Test

A minimal repo to validate Smith's factory loop end-to-end.

## Current State

- Node.js project with `src/calculator.js` (only `add()`) and `src/formatter.js` (only `formatNumber()`)
- Basic test files exist for both modules
- `npm test` runs Node.js built-in test runner

## Phase Plan

### Phase 1: Complete the Utility Library

**Goal:** Implement the missing functions in both the calculator and formatter modules, with full test coverage.

**Stream [A]: Calculator Operations**
- [ ] Add `subtract(a, b)` function to `src/calculator.js`
- [ ] Add `multiply(a, b)` function to `src/calculator.js`
- [ ] Add `divide(a, b)` function to `src/calculator.js` (throw on divide by zero)
- [ ] Add tests for all three new functions in `src/calculator.test.js`
- [ ] Ensure `npm test` passes

**Stream [B]: Formatter Functions -- COMPLETE**
- [x] Add `formatCurrency(amount, currency)` function to `src/formatter.js` (e.g., formatCurrency(42.5, 'USD') returns '$42.50')
- [x] Add `formatPercent(value)` function to `src/formatter.js` (e.g., formatPercent(0.42) returns '42%')
- [x] Add `formatDate(date)` function to `src/formatter.js` (returns YYYY-MM-DD string)
- [x] Add tests for all three new functions in `src/formatter.test.js`
- [x] Ensure `npm test` passes

**Parallel:** A and B are fully independent. No shared files.
**Merge gate:** `npm test` passes after merging both streams.

**Synthesis Report (B merged, A pending):**

*What was delivered:*
- **B**: Users can format numbers as currency (USD, EUR), percentages, and ISO dates using locale-aware built-in APIs.

*Merge narrative:*
B merged first (only completed stream). Had conflicts with main on `.claude/CLAUDE.md` and session logs due to parallel decompose state recovery. Resolved by merging main into feature branch before squash merge. A's worker only committed a Smith config file, never implementing the calculator operations - needs re-dispatch.

*What Phase 1 delivers so far:*
The formatter module is now complete with three production-ready formatting functions backed by 12 tests. The calculator module still only has `add()` and awaits implementation of subtract, multiply, and divide.

**Primary files:**
| Stream | Files |
|--------|-------|
| 1-A | `src/calculator.js`, `src/calculator.test.js` |
| 1-B | `src/formatter.js`, `src/formatter.test.js` |
