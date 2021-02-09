/* eslint-disable no-param-reassign */
import produce from 'immer';

import * as ActionType from './actionTypes';
import * as initialData from './dummy';

const initialState = {
  isLoading: false,
  activeStep: 0,
  steps: initialData.steps,
  deliveryMethods: initialData.deliveryMethods,
  paymentMethods: initialData.paymentMethods,
  formData: {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    phone: '',
    deliveryMethod: '',
    paymentMethod: '',
  },
};

export default produce((draftState, action) => {
  switch (action.type) {
    case ActionType.PREV_FORM_STEP:
      draftState.activeStep -= 1;
      break;

    case ActionType.NEXT_FORM_STEP:
      draftState.activeStep += 1;
      break;

    case ActionType.SET_CONTACTS_DATA:
      draftState.activeStep += 1;
      draftState.formData = { ...draftState.formData, ...action.payload };
      break;

    case ActionType.SET_DELIVERY_METHOD:
      draftState.formData.deliveryMethod = action.payload;
      break;

    case ActionType.SET_PAYMENT_METHOD:
      draftState.formData.paymentMethod = action.payload;
      break;

    case ActionType.CREATE_ORDER_REQUEST:
      draftState.isLoading = true;
      break;

    case ActionType.CREATE_ORDER_SUCCESS:
      draftState.isLoading = false;
      draftState.activeStep = 4;
      break;

    case ActionType.CREATE_ORDER_FAILED:
      draftState.isLoading = false;
      draftState.activeStep = -1;
      break;

    default:
      break;
  }
}, initialState);
