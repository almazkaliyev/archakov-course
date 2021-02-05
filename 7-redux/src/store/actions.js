/* eslint-disable import/prefer-default-export */
import * as Api from '../api';
import {
  createOrderFailed,
  createOrderRequest,
  createOrderSuccess,
} from './actionCreators';

export const createOrder = (data) => (dispatch) => {
  dispatch(createOrderRequest());
  Api.createOrder(data)
    .then(() => dispatch(createOrderSuccess()))
    .catch(() => dispatch(createOrderFailed()));
};
