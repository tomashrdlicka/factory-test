import { readFileSync, writeFileSync, existsSync } from 'node:fs';

export function saveTasks(tasks, filepath) {
  writeFileSync(filepath, JSON.stringify(tasks, null, 2), 'utf-8');
}

export function loadTasks(filepath) {
  if (!existsSync(filepath)) return [];
  const raw = readFileSync(filepath, 'utf-8');
  const tasks = JSON.parse(raw);
  for (const task of tasks) {
    if (task.createdAt) {
      task.createdAt = new Date(task.createdAt);
    }
  }
  return tasks;
}
