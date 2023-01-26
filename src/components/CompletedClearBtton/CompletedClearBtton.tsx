import { useContext } from 'react';

import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

import { TodoContext } from '../../providers/TodoProvider';

export const CompletedClearBtton = () => {
  const { completedAllDelete } = useContext(TodoContext);

  return (
    <Button
      leftIcon={<DeleteIcon />}
      colorScheme='red'
      variant='solid'
      mt={4}
      onClick={completedAllDelete}
    >
      Completed Clear
    </Button>
  );
}
