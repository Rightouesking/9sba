import { Task, TaskFilterOptions } from "../types";

export function getFilteredTasks(tasks: Task[], filter: TaskFilterOptions): Task[] {
  return tasks.filter((task) => {
    const matchesStatus = filter.status ? task.status === filter.status : true;
    const matchesPriority = filter.priority ? task.priority === filter.priority : true;
    const matchesSearch = filter.search
      ? task.title.toLowerCase().includes(filter.search.toLowerCase())
      : true;

    return matchesStatus && matchesPriority && matchesSearch;
  });
}