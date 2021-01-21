import * as TodoActionTypes from './actionTypes';

export const addTodo = (payload) => ({
  type: TodoActionTypes.ADD_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: TodoActionTypes.UPDATE_TODO,
  payload,
});

export const removeTodoById = (payload) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload,
});
