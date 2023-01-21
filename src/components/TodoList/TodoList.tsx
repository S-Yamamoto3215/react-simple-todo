import { TodoItem } from "../TodoItem";
import { FilteringMenu } from "../FilteringMenu";
import { CompletedClearBtton } from "../CompletedClearBtton";

import { TodoListType } from "../../type/Todo";

export const TodoList = () => {
  const todoData: TodoListType = [
    {id: "1", content: 'タスクA', isCompleted: false},
    {id: "2", content: 'タスクB', isCompleted: false},
    {id: "3", content: 'タスクC', isCompleted: true},
    {id: "4", content: 'タスクD', isCompleted: false},
  ];

  return (
    <div className='TodoList'>
      <FilteringMenu />
      <ul className='TodoItemList'>
        {todoData.map((todo) => <TodoItem key={todo.id} id={todo.id} content={todo.content} isCompleted={todo.isCompleted} />)}
      </ul>
      <CompletedClearBtton />
    </div>
  );
}
