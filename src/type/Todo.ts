export type TodoType = {
  id: string;
  content: string;
  isCompleted: boolean;
  creationDate: string;
}

export type TodoListType = TodoType[];

export type TodoFilterType = 'all' | 'active' | 'completed';
