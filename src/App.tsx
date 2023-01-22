import { ChakraProvider, Container } from '@chakra-ui/react'

import { TodoListBase } from './components/TodoListBase'

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW='2xl' centerContent>
        <TodoListBase />
      </Container>
    </ChakraProvider>
  );
}

export default App;
