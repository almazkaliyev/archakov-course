/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { createComment } from '../api';
import { useParams } from '../router/hooks';
import { addComment } from '../store/actionCreators';
import { useDispatch } from '../store/hooks';

const AddCommentForm = () => {
  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const { id } = useParams();

  const onClickHandle = () => {
    const text = inputRef.current.value;
    if (text) {
      createComment(id, text)
        .then((comment) => dispatch(addComment(comment)))
        .finally(() => (inputRef.current.value = ''));
    }
  };

  return (
    <div className="col-lg-4 mb-5 position-relative">
      <h5 className="mb-3">Оставьте свой комментарий:</h5>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="floatingTextarea"
          maxLength="200"
          ref={inputRef}
          style={{ height: 150 }}
        />
        <label htmlFor="floatingTextarea">Введите текст</label>
      </div>
      <button
        className="btn btn-dark position-absolute end-0"
        onClick={onClickHandle}
        type="submit"
      >
        Опубликовать
      </button>
    </div>
  );
};

export default AddCommentForm;
