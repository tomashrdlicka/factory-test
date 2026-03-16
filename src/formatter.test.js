import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatNumber, formatCurrency, formatPercent, formatDate } from './formatter.js';

describe('formatter', () => {
  it('formats a number', () => {
    const result = formatNumber(1000);
    assert.ok(result.includes('1'));
  });
});

describe('formatCurrency', () => {
  it('formats USD', () => {
    assert.strictEqual(formatCurrency(42.5, 'USD'), '$42.50');
  });

  it('formats EUR', () => {
    assert.strictEqual(formatCurrency(42.5, 'EUR'), '€42.50');
  });

  it('rounds fractional cents', () => {
    assert.strictEqual(formatCurrency(42.555, 'USD'), '$42.56');
  });

  it('formats whole numbers with decimals', () => {
    assert.strictEqual(formatCurrency(100, 'USD'), '$100.00');
  });
});

describe('formatPercent', () => {
  it('formats a fractional value', () => {
    assert.strictEqual(formatPercent(0.42), '42%');
  });

  it('formats zero', () => {
    assert.strictEqual(formatPercent(0), '0%');
  });

  it('formats 1 as 100%', () => {
    assert.strictEqual(formatPercent(1), '100%');
  });

  it('formats values greater than 1', () => {
    assert.strictEqual(formatPercent(1.5), '150%');
  });
});

describe('formatDate', () => {
  it('formats a date as YYYY-MM-DD', () => {
    assert.strictEqual(formatDate(new Date(2024, 0, 15)), '2024-01-15');
  });

  it('zero-pads single-digit months', () => {
    assert.strictEqual(formatDate(new Date(2024, 2, 5)), '2024-03-05');
  });

  it('zero-pads single-digit days', () => {
    assert.strictEqual(formatDate(new Date(2024, 11, 3)), '2024-12-03');
  });

  it('handles end of year', () => {
    assert.strictEqual(formatDate(new Date(2024, 11, 31)), '2024-12-31');
  });
});
