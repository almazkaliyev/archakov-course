/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { createPost } from '../api';
import { useHistory } from '../router/hooks';
import { addPost } from '../store/actionCreators';
import { useDispatch } from '../store/hooks';

const CreatePostPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const titleRef = React.useRef();
  const textRef = React.useRef();

  const onClickHandle = () => {
    const title = titleRef.current.value.trim();
    const text = textRef.current.value.trim();
    if (title && text) {
      createPost(title, text).then((createdPost) => {
        dispatch(addPost(createdPost));
        history.push('/');
        history.go(); // without router doesn't refresh page
      });
    }
  };

  return (
    <div className="col-lg-4 mb-5 position-relative">
      <h5 className="mb-3">Новая публикация:</h5>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="floatingInput"
          placeholder="Введите заголовок..."
          ref={titleRef}
          type="text"
        />
        <label htmlFor="floatingInput">Заголовок</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="floatingTextarea"
          maxLength="500"
          placeholder="Введите текст..."
          ref={textRef}
          style={{ height: 200 }}
        />
        <label htmlFor="floatingTextarea">Текст</label>
      </div>
      <button
        className="btn btn-dark position-absolute end-0"
        onClick={onClickHandle}
        type="button"
      >
        Опубликовать
      </button>
    </div>
  );
};

export default CreatePostPage;
