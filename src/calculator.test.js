import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.js';

describe('calculator', () => {
  it('adds two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('adds negative numbers', () => {
    assert.strictEqual(add(-1, -2), -3);
  });

  it('adds zero', () => {
    assert.strictEqual(add(0, 0), 0);
  });
});
