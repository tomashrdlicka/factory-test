export function formatTask(task) {
  return `[${task.id}] ${task.title} (${task.status})`;
}

export function formatTaskList(tasks) {
  if (tasks.length === 0) return 'No tasks';
  return tasks.map(formatTask).join('\n');
}
