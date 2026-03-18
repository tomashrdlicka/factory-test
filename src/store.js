/**
 * In-memory task store.
 * Tasks have: id, title, status ('todo' | 'doing' | 'done'), createdAt.
 * This is the starting point. The factory loop will build out the full app.
 */

const tasks = [];
let nextId = 1;

export function addTask(title) {
  const task = { id: nextId++, title, status: 'todo', createdAt: new Date() };
  tasks.push(task);
  return task;
}

export function getTasks() {
  return [...tasks];
}

export function updateTask(id, updates) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  Object.assign(task, updates);
  return task;
}

export function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

export function clearAll() {
  tasks.length = 0;
  nextId = 1;
}
