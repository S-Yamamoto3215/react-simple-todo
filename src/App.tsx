import { ChakraProvider } from '@chakra-ui/react'

import { TodoListBase } from './components/TodoListBase'

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
