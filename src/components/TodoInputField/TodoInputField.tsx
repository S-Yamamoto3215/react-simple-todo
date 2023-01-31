import { useContext, useState, } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { AlertBox } from "../AlertBox";
import { TodoContext } from "../../providers/TodoProvider";

import { inputOnChange, handleKeyDown, onClickAddButton } from "./functions";

export const TodoInputField = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  return (
    <>
    <InputGroup size="md" mb={4}>
      <Input
        placeholder='e.x) 〇〇をする'
        value={inputValue}
        onChange={(e) => inputOnChange(e, isError, setIsError, setInputValue)}
        onKeyDown={(e) => handleKeyDown(e, inputValue, setIsError, addTodo, setInputValue)}
      />
      <InputRightElement>
        <Button onClick={() => onClickAddButton(inputValue, setIsError, addTodo, setInputValue)}>
          <AddIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
    {isError && <AlertBox status={'error'} title={'入力がありません！'} description={'1文字以上入力してください。'} />}
    </>
  );
}
