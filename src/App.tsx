import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'

import { TodoList } from "./components/TodoList";
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

const TodoListBase = () => {
  return (
    <div className='TodoListBase'>
      <h1>ToDo List</h1>
      <TodoInputField />
      <TodoList />
    </div>
  );
}
