import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add, subtract, multiply, divide } from './calculator.js';

describe('calculator', () => {
  describe('add', () => {
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

  describe('subtract', () => {
    it('subtracts two positive numbers', () => {
      assert.strictEqual(subtract(5, 3), 2);
    });

    it('subtracts negative numbers', () => {
      assert.strictEqual(subtract(-1, -2), 1);
    });

    it('subtracts zero', () => {
      assert.strictEqual(subtract(5, 0), 5);
    });

    it('returns negative when second is larger', () => {
      assert.strictEqual(subtract(3, 5), -2);
    });
  });

  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      assert.strictEqual(multiply(4, 5), 20);
    });

    it('multiplies negative numbers', () => {
      assert.strictEqual(multiply(-3, -4), 12);
    });

    it('multiplies by zero', () => {
      assert.strictEqual(multiply(5, 0), 0);
    });

    it('multiplies positive and negative', () => {
      assert.strictEqual(multiply(3, -2), -6);
    });
  });

  describe('divide', () => {
    it('divides two positive numbers', () => {
      assert.strictEqual(divide(10, 2), 5);
    });

    it('divides negative numbers', () => {
      assert.strictEqual(divide(-10, -2), 5);
    });

    it('divides with decimal result', () => {
      assert.strictEqual(divide(7, 2), 3.5);
    });

    it('divides zero by a number', () => {
      assert.strictEqual(divide(0, 5), 0);
    });

    it('throws on division by zero', () => {
      assert.throws(() => divide(1, 0), { message: 'Division by zero' });
    });
  });
});
