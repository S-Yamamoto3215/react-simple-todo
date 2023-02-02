import { useContext } from 'react';
import { Progress } from '@chakra-ui/react'

import { TodoContext } from "../../providers/TodoProvider";


export const TodoStatus = () => {
  const { progressRateCalc } = useContext(TodoContext);

  return (
    <Progress value={progressRateCalc()} isAnimated hasStripe />
  );
}
