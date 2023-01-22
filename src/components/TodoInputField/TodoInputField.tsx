import { AddIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export const TodoInputField = () => {
  return (
    <InputGroup size="md">
      <Input placeholder='e.x) 〇〇をする' />
      <InputRightElement>
        <Button>
          <AddIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
