import { useContext } from 'react';
import { Flex, List, Spacer } from '@chakra-ui/react'

import { TodoItem } from "../TodoItem";
import { FilteringMenu } from "../FilteringMenu";
import { CompletedClearBtton } from "../CompletedClearBtton";

import { TodoContext } from "../../providers/TodoProvider";


export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <Flex>
        <Spacer />
        <FilteringMenu />
      </Flex>
      <List spacing={3}>
        {todos.map((todo) => <TodoItem key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />)}
      </List>
      <Flex>
        <Spacer />
        <CompletedClearBtton />
      </Flex>
    </>
  );
}
