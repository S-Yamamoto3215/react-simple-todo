import React from 'react';

const App = () => {
  return (
    <div className="App">
      <TodoListBase />
    </div>
  );
}

export default App;

const TodoListBase = () => {
  return (
    <div className='TodoListBase'>
      <h1>ToDo List</h1>
      <TodoInputField />
      <TodoList />
    </div>
  );
}

const TodoInputField = () => {
  return (
    <div className='TodoInputField'>
      <input type="text" placeholder='e.x) 〇〇をする'/>
      <button>→</button>
    </div>
  );
}

const TodoList = () => {
  return (
    <div className='TodoList'>
      <FilteringMenu />
      <TodoItem />
      <CompletedClearBtton />
    </div>
  );
}

const FilteringMenu = () => {
  return (
    <div className='FilteringMenu'>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}

const TodoItem = () => {
  return (
    <div className='TodoItem'>
      <input type="checkbox" name="todoItem" id="aaa" />
      ここにTodoの内容が入ります
    </div>
  );
}

const CompletedClearBtton = () => {
  return (
    <div className='CompletedClearBtton'>
      <button>CompletedClearBtton</button>
    </div>
  );
}
