import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { addTask, getTasks, clearAll, updateTask, deleteTask } from './store.js';

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

describe('updateTask', () => {
  beforeEach(() => clearAll());

  it('updates the title of an existing task', () => {
    const task = addTask('Old title');
    const updated = updateTask(task.id, { title: 'New title' });
    assert.strictEqual(updated.title, 'New title');
    assert.strictEqual(updated.id, task.id);
  });

  it('updates the status of an existing task', () => {
    const task = addTask('Do laundry');
    const updated = updateTask(task.id, { status: 'done' });
    assert.strictEqual(updated.status, 'done');
  });

  it('returns null for a non-existent id', () => {
    const result = updateTask(999, { title: 'Nope' });
    assert.strictEqual(result, null);
  });

  it('reflects updates in getTasks()', () => {
    addTask('Original');
    updateTask(1, { title: 'Changed' });
    const all = getTasks();
    assert.strictEqual(all[0].title, 'Changed');
  });
});

describe('deleteTask', () => {
  beforeEach(() => clearAll());

  it('deletes an existing task and removes it from getTasks()', () => {
    addTask('To remove');
    addTask('To keep');
    const result = deleteTask(1);
    assert.strictEqual(result, true);
    const all = getTasks();
    assert.strictEqual(all.length, 1);
    assert.strictEqual(all[0].title, 'To keep');
  });

  it('returns true when task is found', () => {
    addTask('Exists');
    assert.strictEqual(deleteTask(1), true);
  });

  it('returns false for a non-existent id', () => {
    assert.strictEqual(deleteTask(999), false);
  });
});
