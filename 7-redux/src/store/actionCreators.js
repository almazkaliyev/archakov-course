import * as ActionType from './actionTypes';

export const prevFormStep = () => ({
  type: ActionType.PREV_FORM_STEP,
});

export const nextFormStep = () => ({
  type: ActionType.NEXT_FORM_STEP,
});

export const setContactsData = (data) => ({
  type: ActionType.SET_CONTACTS_DATA,
  payload: data,
});

export const setDeliveryMethodData = (method) => ({
  type: ActionType.SET_DELIVERY_METHOD,
  payload: method,
});

export const setPaymentMethodData = (method) => ({
  type: ActionType.SET_PAYMENT_METHOD,
  payload: method,
});

export const createOrderRequest = () => ({
  type: ActionType.CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = () => ({
  type: ActionType.CREATE_ORDER_SUCCESS,
});

export const createOrderFailed = () => ({
  type: ActionType.CREATE_ORDER_FAILED,
});
