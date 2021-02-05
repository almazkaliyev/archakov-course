/* eslint-disable import/prefer-default-export */
import axios from './axios';

export const createOrder = async (data) => {
  try {
    const res = await axios.post('orders', data);
    return res;
  } catch (e) {
    throw new Error(e);
  }
};
