import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'

import { TodoItem } from "./components/TodoItem";

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

const TodoInputField = () => {
  return (
    <div className='TodoInputField'>
      <input type="text" placeholder='e.x) 〇〇をする'/>
      <button>→</button>
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

const FilteringMenu = () => {
  return (
    <div className='FilteringMenu'>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}


const CompletedClearBtton = () => {
  return (
    <div className='CompletedClearBtton'>
      <button>CompletedClearBtton</button>
    </div>
  );
}
