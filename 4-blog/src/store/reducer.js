import * as ActionTypes from './actionTypes';

export const initialState = { items: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_POSTS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};
