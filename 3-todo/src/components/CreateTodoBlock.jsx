import React from 'react';

import { addTodo } from '../store/actionCreators';
import { StoreContext } from '../store/storeContext';

const CreateTodoBlock = () => {
  const colors = ['grey', 'red', 'blue', 'orange', 'green'];
  const { dispatch } = React.useContext(StoreContext);
  const [inputValue, setInputValue] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const inputRef = React.useRef();

  const onKeyDownHandle = ({ keyCode }) => {
    // enter key
    if (keyCode === 13) {
      dispatch(
        addTodo({
          text: inputValue,
          completed: false,
          color: selectedColor,
        })
      );
      setInputValue('');
      setSelectedColor(colors[0]);
      inputRef.current.focus();
    }
  };

  const onSelectColor = (event) => {
    setSelectedColor(event.target.id);
  };

  return (
    <div className="todo__input">
      <input
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={onKeyDownHandle}
        placeholder="Текст задачи..."
        ref={inputRef}
        type="text"
        value={inputValue}
      />
      <div className="color-selector">
        {colors.map((color) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label className="color-selector__item" key={color}>
            <input
              checked={color === selectedColor}
              className={color}
              id={color}
              name="color"
              onChange={onSelectColor}
              type="radio"
              value={color}
            />
            <span className={`checkmark ${color}`} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CreateTodoBlock;
