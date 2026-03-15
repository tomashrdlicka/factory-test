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

**Stream [B]: Formatter Functions**
- [ ] Add `formatCurrency(amount, currency)` function to `src/formatter.js` (e.g., formatCurrency(42.5, 'USD') returns '$42.50')
- [ ] Add `formatPercent(value)` function to `src/formatter.js` (e.g., formatPercent(0.42) returns '42%')
- [ ] Add `formatDate(date)` function to `src/formatter.js` (returns YYYY-MM-DD string)
- [ ] Add tests for all three new functions in `src/formatter.test.js`
- [ ] Ensure `npm test` passes

**Parallel:** A and B are fully independent. No shared files.
**Merge gate:** `npm test` passes after merging both streams.

**Primary files:**
| Stream | Files |
|--------|-------|
| 1-A | `src/calculator.js`, `src/calculator.test.js` |
| 1-B | `src/formatter.js`, `src/formatter.test.js` |
