import { Box, Heading } from '@chakra-ui/react'

import { TodoProvider } from "../../providers/TodoProvider";
import { TodoList } from "../TodoList";
import { TodoInputField } from "../TodoInputField";
import { TodoStatus } from "../TodoStatus";

export const TodoListBase = () => {
  return (
    <Box w ="100%" pt={5}>
      <Heading textAlign="center" mb={5}>ToDo List</Heading>
      <TodoProvider>
        <Box mb={5}>
          <TodoStatus />
        </Box>
        <Box mb={5}>
          <TodoInputField />
        </Box>
        <Box>
          <TodoList />
        </Box>
      </TodoProvider>
    </Box>
  );
}
