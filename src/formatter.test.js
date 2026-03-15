import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatNumber } from './formatter.js';

describe('formatter', () => {
  it('formats a number', () => {
    const result = formatNumber(1000);
    assert.ok(result.includes('1'));
  });
});
