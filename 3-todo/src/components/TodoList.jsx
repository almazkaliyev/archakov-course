import React from 'react';

import { StoreContext } from '../store/storeContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { items } = store;

  return (
    <div className="todo__list">
      {items && items.length ? (
        items.map(({ id, text, color, completed }) => (
          <TodoItem
            color={color}
            completed={completed}
            dispatch={dispatch}
            id={id}
            key={id}
            text={text}
          />
        ))
      ) : (
        <p style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.7)' }}>
          Начните с малого - добавьте задачу
        </p>
      )}
    </div>
  );
};

export default TodoList;
