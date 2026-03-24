import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { saveTasks, loadTasks } from './persistence.js';

describe('persistence', () => {
  let tmpDir;
  let filepath;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'taskflow-test-'));
    filepath = join(tmpDir, 'tasks.json');
  });

  afterEach(() => {
    rmSync(tmpDir, { recursive: true });
  });

  it('round-trips tasks preserving all fields', () => {
    const now = new Date();
    const tasks = [
      { id: 1, title: 'Buy milk', status: 'todo', createdAt: now },
      { id: 2, title: 'Walk dog', status: 'done', createdAt: now },
    ];
    saveTasks(tasks, filepath);
    const loaded = loadTasks(filepath);
    assert.strictEqual(loaded.length, 2);
    assert.strictEqual(loaded[0].id, 1);
    assert.strictEqual(loaded[0].title, 'Buy milk');
    assert.strictEqual(loaded[0].status, 'todo');
    assert.strictEqual(loaded[1].id, 2);
    assert.strictEqual(loaded[1].title, 'Walk dog');
    assert.strictEqual(loaded[1].status, 'done');
  });

  it('returns empty array for non-existent file', () => {
    const result = loadTasks(join(tmpDir, 'nope.json'));
    assert.deepStrictEqual(result, []);
  });

  it('deserializes createdAt back to Date objects', () => {
    const now = new Date();
    saveTasks([{ id: 1, title: 'Test', status: 'todo', createdAt: now }], filepath);
    const loaded = loadTasks(filepath);
    assert.ok(loaded[0].createdAt instanceof Date);
    assert.strictEqual(loaded[0].createdAt.getTime(), now.getTime());
  });

  it('round-trips an empty array', () => {
    saveTasks([], filepath);
    const loaded = loadTasks(filepath);
    assert.deepStrictEqual(loaded, []);
  });

  it('writes valid pretty-printed JSON', () => {
    saveTasks([{ id: 1, title: 'A', status: 'todo', createdAt: new Date() }], filepath);
    const raw = readFileSync(filepath, 'utf-8');
    const parsed = JSON.parse(raw);
    assert.strictEqual(parsed.length, 1);
    assert.ok(raw.includes('\n'), 'JSON should be pretty-printed');
    assert.ok(raw.includes('  '), 'JSON should use 2-space indent');
  });

  it('handles tasks without createdAt gracefully', () => {
    saveTasks([{ id: 1, title: 'No date', status: 'todo' }], filepath);
    const loaded = loadTasks(filepath);
    assert.strictEqual(loaded[0].title, 'No date');
    assert.strictEqual(loaded[0].createdAt, undefined);
  });
});
