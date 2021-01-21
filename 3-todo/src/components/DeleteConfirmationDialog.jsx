import React from 'react';

import { useClickOutside } from '../hooks/useClickOutside';

const DeleteConfirmationDialog = ({ onConfirm, onExit }) => {
  const dialogRef = React.useRef();
  useClickOutside(dialogRef, onExit);

  return (
    <div className="dialog" ref={dialogRef}>
      <div className="dialog__content">
        <p>Вы действительно хотите удалить задачу?</p>
      </div>
      <div className="dialog__actions">
        <button
          className="dialog__button dialog__button--confirm"
          onClick={onConfirm}
          type="button"
        >
          Удалить
        </button>
        <button
          className="dialog__button dialog__button--cancel"
          onClick={onExit}
          type="button"
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;
