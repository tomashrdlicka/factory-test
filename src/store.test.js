import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { addTask, getTasks, clearAll } from './store.js';

describe('store', () => {
  beforeEach(() => clearAll());

  it('adds a task with auto-incrementing id', () => {
    const task = addTask('Buy milk');
    assert.strictEqual(task.id, 1);
    assert.strictEqual(task.title, 'Buy milk');
    assert.strictEqual(task.status, 'todo');
  });

  it('returns all tasks', () => {
    addTask('Task 1');
    addTask('Task 2');
    assert.strictEqual(getTasks().length, 2);
  });

  it('clears all tasks', () => {
    addTask('Task 1');
    clearAll();
    assert.strictEqual(getTasks().length, 0);
  });
});
