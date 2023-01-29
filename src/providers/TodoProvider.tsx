import { createContext, FC, ReactNode, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { TodoListType } from "../type/Todo";

type TodoProviderPropsType = {
  children: ReactNode;
}

type TodoProviderValueType = {
  todos: TodoListType;
  addTodo: (content: string) => void;
  toggleTodo: (id: string) => void;
  completedAllDelete: () => void;
}

export const TodoContext = createContext<TodoProviderValueType>({
  todos: [],
  addTodo: function (content: string): void {
    throw new Error('Function not implemented.');
  },
  toggleTodo: function (id: string): void {
    throw new Error('Function not implemented.');
  },
  completedAllDelete: function (): void {
    throw new Error('Function not implemented.');
  }
});

export const TodoProvider: FC<TodoProviderPropsType> = ({ children }) => {
  const [todos, setTodos] = useState<TodoListType>([]);

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

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, completedAllDelete }}>
      { children }
    </TodoContext.Provider>
  );
}
