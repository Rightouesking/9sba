export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskFilterOptions {
  status?: string;
  priority?: string;
  search?: string;
}

export interface TaskProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}