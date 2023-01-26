import { useContext, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { TodoContext } from "../../providers/TodoProvider";

export const TodoInputField = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState<string>('')

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onClickAddButton = () => {
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <InputGroup size="md">
      <Input
        placeholder='e.x) 〇〇をする'
        value={inputValue}
        onChange={inputOnChange}
      />
      <InputRightElement>
        <Button onClick={onClickAddButton}>
          <AddIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
