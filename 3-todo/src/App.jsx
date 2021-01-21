import React from 'react';

import CreateTodoBlock from './components/CreateTodoBlock';
import TodoList from './components/TodoList';

const App = () => (
  <div className="todo">
    <h2 className="todo__title">Список задач</h2>
    <TodoList />
    <hr className="divider" />
    <CreateTodoBlock />
  </div>
);

export default App;
