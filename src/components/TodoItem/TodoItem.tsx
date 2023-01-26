import { useContext } from 'react';
import { Checkbox, ListItem, Text } from '@chakra-ui/react'

import { TodoType } from "../../type/Todo";
import { TodoContext } from '../../providers/TodoProvider';

type TodoItemType = (props: TodoType) => JSX.Element;

export const TodoItem: TodoItemType = ({id, content, isCompleted}) => {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <ListItem id={`todoItem-${id}`} className='TodoItem'>
      <Text size='lg' as={isCompleted ? 'del' : 'b'}>
        <Checkbox size='lg' mr={3} colorScheme='green' defaultChecked={isCompleted} onChange={() => toggleTodo(id)} />
        {content}
      </Text>
    </ListItem>
  );
}
