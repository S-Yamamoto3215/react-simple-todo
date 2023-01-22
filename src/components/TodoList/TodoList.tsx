import { Flex, List, Spacer } from '@chakra-ui/react'

import { TodoItem } from "../TodoItem";
import { FilteringMenu } from "../FilteringMenu";
import { CompletedClearBtton } from "../CompletedClearBtton";
import { TodoListType } from "../../type/Todo";


export const TodoList = () => {
  const todoData: TodoListType = [
    {id: "1", content: 'タスクA', isCompleted: false},
    {id: "2", content: 'タスクB', isCompleted: false},
    {id: "3", content: 'タスクC', isCompleted: true},
    {id: "4", content: 'タスクD', isCompleted: false},
  ];

  return (
    <>
      <Flex>
        <Spacer />
        <FilteringMenu />
      </Flex>
      <List spacing={3}>
        {todoData.map((todo) => <TodoItem key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />)}
      </List>
      <Flex>
        <Spacer />
        <CompletedClearBtton />
      </Flex>
    </>
  );
}
