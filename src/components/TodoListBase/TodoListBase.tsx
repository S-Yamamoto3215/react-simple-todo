import { TodoList } from "../TodoList";
import { TodoInputField } from "../TodoInputField";

export const TodoListBase = () => {
  return (
    <div className='TodoListBase'>
      <h1>ToDo List</h1>
      <TodoInputField />
      <TodoList />
    </div>
  );
}
