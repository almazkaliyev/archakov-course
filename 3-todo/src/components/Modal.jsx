import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const modalRoot = document.createElement('div');
  const element = document.createElement('div');

  React.useEffect(() => {
    modalRoot.id = 'presentational';
    element.classList.add('modal');
    modalRoot.appendChild(element);

    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return createPortal(children, element);
};

export default Modal;
