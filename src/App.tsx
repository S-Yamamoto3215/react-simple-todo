import { ChakraProvider, Container } from '@chakra-ui/react'

import { TodoListBase } from './components/TodoListBase'
import { SortableBase } from './components/SortableBase'

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW='2xl' centerContent>
        <TodoListBase />
        <SortableBase />
      </Container>
    </ChakraProvider>
  );
}

export default App;
