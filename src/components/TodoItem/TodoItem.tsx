import { TodoType } from "../type/Todo";

type TodoItemType = (props: TodoType) => JSX.Element;

export const TodoItem: TodoItemType = ({id, content, isCompleted}) => {
  return (
    <li id={`todoItem-${id}`} className='TodoItem'>
      <input type="checkbox" name="todoItem" defaultChecked={isCompleted} />
      {content}
    </li>
  );
}
