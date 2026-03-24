import { addTask, getTasks, updateTask, deleteTask } from './store.js';
import { formatTask, formatTaskList } from './formatter.js';

const USAGE = `Usage: taskflow <command>

Commands:
  add <title>              Add a new task
  list                     List all tasks
  update <id> <field> <value>  Update a task field
  delete <id>              Delete a task`;

export function run(args) {
  const [command, ...rest] = args;

  switch (command) {
    case 'add': {
      if (rest.length === 0) return 'Error: title is required\n\n' + USAGE;
      const title = rest.join(' ');
      const task = addTask(title);
      return `Added: ${formatTask(task)}`;
    }
    case 'list': {
      const tasks = getTasks();
      return formatTaskList(tasks);
    }
    case 'update': {
      const [id, field, ...valueParts] = rest;
      if (!id || !field || valueParts.length === 0) {
        return 'Error: usage: update <id> <field> <value>';
      }
      const value = valueParts.join(' ');
      const task = updateTask(Number(id), { [field]: value });
      if (!task) return `Error: task ${id} not found`;
      return `Updated: ${formatTask(task)}`;
    }
    case 'delete': {
      const [id] = rest;
      if (!id) return 'Error: usage: delete <id>';
      const result = deleteTask(Number(id));
      if (!result) return `Error: task ${id} not found`;
      return `Deleted task ${id}`;
    }
    default:
      return USAGE;
  }
}
