import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { run } from './cli.js';
import { clearAll } from './store.js';

describe('cli', () => {
  beforeEach(() => clearAll());

  it('adds a task and returns formatted confirmation', () => {
    const result = run(['add', 'Buy', 'milk']);
    assert.ok(result.includes('Buy milk'));
    assert.ok(result.includes('todo'));
    assert.ok(result.startsWith('Added:'));
  });

  it('lists tasks when none exist', () => {
    const result = run(['list']);
    assert.strictEqual(result, 'No tasks');
  });

  it('lists tasks after adding', () => {
    run(['add', 'Task one']);
    run(['add', 'Task two']);
    const result = run(['list']);
    assert.ok(result.includes('Task one'));
    assert.ok(result.includes('Task two'));
  });

  it('updates a task status', () => {
    run(['add', 'Do laundry']);
    const result = run(['update', '1', 'status', 'done']);
    assert.ok(result.includes('Updated:'));
    assert.ok(result.includes('done'));
  });

  it('returns error when updating non-existent task', () => {
    const result = run(['update', '999', 'status', 'done']);
    assert.ok(result.includes('not found'));
  });

  it('deletes a task', () => {
    run(['add', 'To remove']);
    const result = run(['delete', '1']);
    assert.ok(result.includes('Deleted'));
  });

  it('returns error when deleting non-existent task', () => {
    const result = run(['delete', '999']);
    assert.ok(result.includes('not found'));
  });

  it('returns usage for no arguments', () => {
    const result = run([]);
    assert.ok(result.includes('Usage:'));
    assert.ok(result.includes('add'));
    assert.ok(result.includes('list'));
  });

  it('returns usage for unknown command', () => {
    const result = run(['unknown']);
    assert.ok(result.includes('Usage:'));
  });

  it('returns error when add has no title', () => {
    const result = run(['add']);
    assert.ok(result.includes('Error:'));
  });
});
