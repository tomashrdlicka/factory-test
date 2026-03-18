import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatTask, formatTaskList } from './formatter.js';

describe('formatTask', () => {
  it('formats a todo task', () => {
    const task = { id: 1, title: 'Buy milk', status: 'todo', createdAt: new Date() };
    assert.strictEqual(formatTask(task), '[1] Buy milk (todo)');
  });

  it('formats a done task', () => {
    const task = { id: 2, title: 'Clean house', status: 'done', createdAt: new Date() };
    assert.strictEqual(formatTask(task), '[2] Clean house (done)');
  });

  it('handles different ids', () => {
    const task = { id: 42, title: 'Fix bug', status: 'doing', createdAt: new Date() };
    assert.strictEqual(formatTask(task), '[42] Fix bug (doing)');
  });
});

describe('formatTaskList', () => {
  it('returns "No tasks" for empty array', () => {
    assert.strictEqual(formatTaskList([]), 'No tasks');
  });

  it('formats a single task', () => {
    const tasks = [{ id: 1, title: 'Buy milk', status: 'todo', createdAt: new Date() }];
    assert.strictEqual(formatTaskList(tasks), '[1] Buy milk (todo)');
  });

  it('formats multiple tasks with newline separation', () => {
    const tasks = [
      { id: 1, title: 'Buy milk', status: 'todo', createdAt: new Date() },
      { id: 2, title: 'Clean house', status: 'done', createdAt: new Date() },
    ];
    assert.strictEqual(formatTaskList(tasks), '[1] Buy milk (todo)\n[2] Clean house (done)');
  });
});
