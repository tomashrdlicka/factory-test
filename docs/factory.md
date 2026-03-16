# Factory Test

A minimal repo to validate Smith's factory loop end-to-end.

## Current State

- Node.js project with complete calculator and formatter modules
- Calculator: `add`, `subtract`, `multiply`, `divide` (with division-by-zero guard)
- Formatter: `formatNumber`, `formatCurrency`, `formatPercent`, `formatDate`
- 29 tests, all passing
- `npm test` runs Node.js built-in test runner

## Phase Plan

### Phase 1: Complete the Utility Library -- COMPLETE

**Goal:** Implement the missing functions in both the calculator and formatter modules, with full test coverage.

**Stream [A]: Calculator Operations -- COMPLETE**
- [x] Add `subtract(a, b)` function to `src/calculator.js`
- [x] Add `multiply(a, b)` function to `src/calculator.js`
- [x] Add `divide(a, b)` function to `src/calculator.js` (throw on divide by zero)
- [x] Add tests for all three new functions in `src/calculator.test.js`
- [x] Ensure `npm test` passes

**Stream [B]: Formatter Functions -- COMPLETE**
- [x] Add `formatCurrency(amount, currency)` function to `src/formatter.js` (e.g., formatCurrency(42.5, 'USD') returns '$42.50')
- [x] Add `formatPercent(value)` function to `src/formatter.js` (e.g., formatPercent(0.42) returns '42%')
- [x] Add `formatDate(date)` function to `src/formatter.js` (returns YYYY-MM-DD string)
- [x] Add tests for all three new functions in `src/formatter.test.js`
- [x] Ensure `npm test` passes

**Parallel:** A and B are fully independent. No shared files.
**Merge gate:** `npm test` passes after merging both streams. **PASSED** (29/29 tests)

**Primary files:**
| Stream | Files |
|--------|-------|
| 1-A | `src/calculator.js`, `src/calculator.test.js` |
| 1-B | `src/formatter.js`, `src/formatter.test.js` |

**Synthesis Report (A, B merged):**

*What was delivered:*
- **A**: Calculator now supports all four arithmetic operations with proper error handling for division by zero.
- **B**: Formatter now provides locale-aware currency formatting, percentage display, and date serialization using only built-in APIs.

*Merge narrative:*
A merged first, B merged second. Zero conflicts - the streams were perfectly independent (separate source and test files). The only shared change was a `.claude/CLAUDE.md` Smith header injection on both branches, which GitHub's squash merge resolved automatically.

*What Phase 1 delivers:*
The utility library is now feature-complete. Both modules have full arithmetic and formatting capabilities with 29 tests covering normal cases, edge cases (zero, negatives, decimal results), and error conditions (division by zero). The project is ready to serve as a validated test bed for Smith's factory loop.
