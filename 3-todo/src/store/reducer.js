import * as TodoActionTypes from './actionTypes';

const stateFromLocalStorage = JSON.parse(localStorage.getItem('store')) ?? {
  items: [],
};

export const initialState = stateFromLocalStorage;

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 7),
        ...action.payload,
      };
      return {
        ...state,
        items: [...state.items, newTodo],
      };
    }

    case TodoActionTypes.UPDATE_TODO: {
      const updatedItems = state.items.map((item) => {
        if (action.payload.id !== item.id) {
          return item;
        }

        return {
          ...action.payload,
        };
      });
      return {
        ...state,
        items: [...updatedItems],
      };
    }

    case TodoActionTypes.REMOVE_TODO: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
