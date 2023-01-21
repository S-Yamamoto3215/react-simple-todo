import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'

import { TodoItem } from "./components/TodoItem";
import { FilteringMenu } from "./components/FilteringMenu";
import { CompletedClearBtton } from "./components/CompletedClearBtton";
import { TodoInputField } from "./components/TodoInputField";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <TodoListBase />
      </div>
    </ChakraProvider>
  );
}

export default App;

type TodoType = {
  id: string;
  content: string;
  isCompleted: boolean;
}

type TodoListType = TodoType[];

const TodoListBase = () => {
  return (
    <div className='TodoListBase'>
      <h1>ToDo List</h1>
      <TodoInputField />
      <TodoList />
    </div>
  );
}

const TodoList = () => {
  const todoData: TodoListType = [
    {id: "1", content: 'タスクA', isCompleted: false},
    {id: "2", content: 'タスクB', isCompleted: false},
    {id: "3", content: 'タスクC', isCompleted: true},
    {id: "4", content: 'タスクD', isCompleted: false},
  ];

  return (
    <div className='TodoList'>
      <FilteringMenu />
      <ul className='TodoItemList'>
        {todoData.map((todo) => <TodoItem key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />)}
      </ul>
      <CompletedClearBtton />
    </div>
  );
}
