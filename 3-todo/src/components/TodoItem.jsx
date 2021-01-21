import React from 'react';

import { removeTodoById, updateTodo } from '../store/actionCreators';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import Modal from './Modal';

const TodoItem = ({ id, text, color, completed, dispatch }) => {
  const [inputValue, setInputValue] = React.useState(text);
  const [isEdit, setIsEdit] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const onDeleteHandle = () => dispatch(removeTodoById(id));

  const onUpdateHandle = (todo) => dispatch(updateTodo(todo));

  const toggleTodoComplete = (event) =>
    dispatch(
      updateTodo({
        id,
        text,
        color,
        completed: event.target.checked,
      })
    );

  const onInputKeyDown = ({ keyCode }) => {
    // enter key
    if (keyCode === 13) {
      onUpdateHandle({
        id,
        text: inputValue,
        color,
        completed,
      });
      setIsEdit(false);
    }
    // escape key
    if (keyCode === 27) {
      setInputValue(text);
      setIsEdit(false);
    }
  };

  return (
    <>
      <div className="todo__item">
        <div className="todo__checkbox">
          <label htmlFor={`todo-${id}`}>
            <input
              checked={completed}
              id={`todo-${id}`}
              onChange={toggleTodoComplete}
              type="checkbox"
            />
            <div className="icon">
              <svg className="icon__svg" viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
              </svg>
            </div>
          </label>
        </div>
        <div className={`todo__delimiter ${color}`} />
        {isEdit ? (
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            className="todo__edit-input"
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={onInputKeyDown}
            type="text"
            value={inputValue}
          />
        ) : (
          <p className="todo__text">{text}</p>
        )}
        <div className="todo__actions">
          <button
            className="button icon-button"
            onClick={() => setIsEdit(true)}
            type="button"
          >
            <svg className="icon-button__svg" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </button>

          <button
            className="button icon-button"
            onClick={() => setShowModal(true)}
            type="button"
          >
            <svg className="icon-button__svg" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      </div>

      {showModal && (
        <Modal>
          <DeleteConfirmationDialog
            onConfirm={onDeleteHandle}
            onExit={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default TodoItem;
