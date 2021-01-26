/* eslint-disable import/prefer-default-export */
import * as ActionTypes from './actionTypes';

export const setPosts = (payload) => ({
  type: ActionTypes.SET_POSTS,
  payload,
});

export const addPost = (payload) => ({
  type: ActionTypes.ADD_POST,
  payload,
});

export const setComments = (payload) => ({
  type: ActionTypes.SET_COMMENTS,
  payload,
});

export const addComment = (payload) => ({
  type: ActionTypes.ADD_COMMENT,
  payload,
});
