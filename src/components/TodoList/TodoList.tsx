import { useContext } from 'react';
import { Flex, List, Spacer } from '@chakra-ui/react'

import { TodoItem } from "../TodoItem";
import { FilteringMenu } from "../FilteringMenu";
import { CompletedClearBtton } from "../CompletedClearBtton";

import { TodoContext } from "../../providers/TodoProvider";


export const TodoList = () => {
  const { todos, fillterTodos, filter } = useContext(TodoContext);

  return (
    <>
      <Flex>
        <Spacer />
        <FilteringMenu />
      </Flex>
      <List spacing={3}>
        {fillterTodos(todos, filter).map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              content={todo.content}
              isCompleted={todo.isCompleted}
              creationDate={todo.creationDate}
            />
          );
        })}
      </List>
      <Flex>
        <Spacer />
        <CompletedClearBtton />
      </Flex>
    </>
  );
}
