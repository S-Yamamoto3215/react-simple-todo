import { useContext, useState, } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { AlertBox } from "../AlertBox";
import { TodoContext } from "../../providers/TodoProvider";

export const TodoInputField = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isError && setIsError(false)
    setInputValue(e.target.value)
  }

  const onClickAddButton = () => {
    if (inputValue === '') {
      setIsError(true)
    } else {
      addTodo(inputValue)
      setInputValue('')
      setIsError(false)
    }
  }

  return (
    <>
    <InputGroup size="md" mb={4}>
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
    {isError && <AlertBox status={'error'} title={'入力がありません！'} description={'1文字以上入力してください。'} />}
    </>
  );
}
