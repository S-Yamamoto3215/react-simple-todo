import { useContext } from 'react';
import { Checkbox, ListItem, Text, Flex, Spacer } from '@chakra-ui/react'

import { TodoType } from "../../type/Todo";
import { TodoContext } from '../../providers/TodoProvider';

type TodoItemType = (props: TodoType) => JSX.Element;

export const TodoItem: TodoItemType = ({id, content, isCompleted, creationDate}) => {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <ListItem id={`todoItem-${id}`} className='TodoItem'>
      <Flex>
        <Checkbox size='lg' mr={3} colorScheme='green' defaultChecked={isCompleted} onChange={() => toggleTodo(id)} />
        <Text size='lg' as={isCompleted ? 'del' : 'b'}>{content}</Text>
        <Spacer />
        <Text size='sm' color='gray.500'>{creationDate}</Text>
      </Flex>
    </ListItem>
  );
}
