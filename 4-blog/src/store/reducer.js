import * as ActionTypes from './actionTypes';

export const initialState = { items: [], comments: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_POSTS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case ActionTypes.SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload.reverse(),
      };
    }

    case ActionTypes.ADD_COMMENT: {
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    }

    default:
      return state;
  }
};
