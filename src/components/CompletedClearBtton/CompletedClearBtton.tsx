import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

export const CompletedClearBtton = () => {
  return (
    <Button
      leftIcon={<DeleteIcon />}
      colorScheme='red'
      variant='solid'
      mt={4}
    >
      Completed Clear
    </Button>
  );
}
