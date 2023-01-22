import { Checkbox, ListItem, Text } from '@chakra-ui/react'

import { TodoType } from "../../type/Todo";

type TodoItemType = (props: TodoType) => JSX.Element;

export const TodoItem: TodoItemType = ({id, content, isCompleted}) => {
  return (
    <ListItem id={`todoItem-${id}`} className='TodoItem'>
      <Text size='lg' as={isCompleted ? 'del' : 'b'}>
        <Checkbox size='lg' mr={3} colorScheme='green' defaultChecked={isCompleted} />
        {content}
      </Text>
    </ListItem>
  );
}
