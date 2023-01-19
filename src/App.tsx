import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      {/* TodoInputField */}
      <div className='TodoInputField'>
        <input type="text" placeholder='e.x) 〇〇をする'/>
        <button>→</button>
      </div>

      <TodoList />
    </div>
  );
}

export default App;

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
