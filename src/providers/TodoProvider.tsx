import { createContext, FC, ReactNode, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { TodoListType, TodoFilterType } from "../type/Todo";

type TodoProviderPropsType = {
  children: ReactNode;
}

type TodoProviderValueType = {
  todos: TodoListType;
  filter: TodoFilterType;
  setFilter: (filter: TodoFilterType) => void;
  addTodo: (content: string) => void;
  toggleTodo: (id: string) => void;
  completedAllDelete: () => void;
  fillterTodos: (todos: TodoListType, filter: TodoFilterType) => TodoListType;
}

export const TodoContext = createContext<TodoProviderValueType>({
  todos: [],
  filter: 'all',
  setFilter: function (filter: TodoFilterType): void {
    throw new Error('Function not implemented.');
  },
  addTodo: function (content: string): void {
    throw new Error('Function not implemented.');
  },
  toggleTodo: function (id: string): void {
    throw new Error('Function not implemented.');
  },
  completedAllDelete: function (): void {
    throw new Error('Function not implemented.');
  },
  fillterTodos: function (todos: TodoListType, filter: TodoFilterType): TodoListType {
    throw new Error('Function not implemented.');
  }
});

export const TodoProvider: FC<TodoProviderPropsType> = ({ children }) => {
  const [todos, setTodos] = useState<TodoListType>([]);
  const [filter, setFilter] = useState<TodoFilterType>('all');

  const addTodo = (content: string) => {
    const newTodo = {
      id: uuidv4(),
      content,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const completedAllDelete = () => {
    const newTodos = todos.filter(todo => !todo.isCompleted);
    setTodos(newTodos);
  }

  const fillterTodos = (todos: TodoListType, filter: TodoFilterType) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
    }
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, completedAllDelete, filter, setFilter, fillterTodos }}>
      { children }
    </TodoContext.Provider>
  );
}
