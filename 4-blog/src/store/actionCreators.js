/* eslint-disable import/prefer-default-export */
import * as ActionTypes from './actionTypes';

export const setPosts = (payload) => ({
  type: ActionTypes.SET_POSTS,
  payload,
});
