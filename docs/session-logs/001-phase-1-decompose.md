# Phase 1 Decomposed - 2026-03-16

**Phase:** phase-1 - Complete the Utility Library
**Event:** decompose
**Streams:** A (Calculator Operations), B (Formatter Functions)

## Phase goal
Implement the missing functions in both the calculator and formatter modules, with full test coverage.

## How it was split
- **Stream A** delivers subtract, multiply, and divide operations for the calculator module. It is independent because it only touches `src/calculator.js` and `src/calculator.test.js`.
- **Stream B** delivers formatCurrency, formatPercent, and formatDate for the formatter module. It is independent because it only touches `src/formatter.js` and `src/formatter.test.js`.

## Dependencies
All independent. No shared files between streams.

## Rationale
The plan in `docs/factory.md` already defines two streams with zero file overlap. This is a clean split with no merge friction expected. Each stream can be implemented and tested in complete isolation.

## Recovery Note
This decompose was re-run to fix missing state: exec-plans existed on feature branches but were not on remote main. Feature branches already contain implementations from a prior run.
