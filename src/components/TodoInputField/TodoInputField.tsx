import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export const TodoInputField = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <InputGroup size="md">
      <Input
        placeholder='e.x) 〇〇をする'
        value={inputValue}
        onChange={inputOnChange}
      />
      <InputRightElement>
        <Button>
          <AddIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
