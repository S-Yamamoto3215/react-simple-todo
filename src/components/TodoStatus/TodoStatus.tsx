import { useContext } from 'react';
import { Flex, Progress, Text } from '@chakra-ui/react'

import { TodoContext } from "../../providers/TodoProvider";


export const TodoStatus = () => {
  const { todos } = useContext(TodoContext);

  const progressRateCalc = () => {
    const completedTodos = todos.filter(todo => todo.isCompleted);
    if (completedTodos.length === 0) {
      return 0;
    }
    const progressRate = completedTodos.length / todos.length * 100;
    return progressRate;
  }

  return (
    <>
      <Flex mb={2}>
        <Text fontSize='sm' fontWeight='bold'>すべてのタスク：{todos.length}</Text>
        <Text fontSize='sm' fontWeight='bold' mx={4}>/</Text>
        <Text fontSize='sm' fontWeight='bold' color='red.500'>未完了：{todos.filter(todo => !todo.isCompleted).length}</Text>
        <Text fontSize='sm' fontWeight='bold' mx={4}>/</Text>
        <Text fontSize='sm' fontWeight='bold' color='teal.500'>完了：{todos.filter(todo => todo.isCompleted).length}</Text>
      </Flex>
      <Progress value={progressRateCalc()} isAnimated hasStripe />
    </>
  );
}
