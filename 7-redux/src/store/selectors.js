import { createSelector } from 'reselect';

export const stepsSelector = (state) => state.steps;
export const maxStepNumberSelector = (state) => stepsSelector(state).length;
export const activeStepSelector = (state) => state.activeStep;
export const deliveryMethodsSelector = (state) => state.deliveryMethods;
export const paymentMethodsSelector = (state) => state.paymentMethods;
export const formDataSelector = (state) => state.formData;
export const isLoadingSelector = (state) => state.isLoading;

export const stepperProgressValueSelector = createSelector(
  activeStepSelector,
  maxStepNumberSelector,
  (activeStep, maxStepNumber) => 100 * ((activeStep + 1) / maxStepNumber)
);

export const contactsDataSelector = createSelector(
  formDataSelector,
  ({ firstName, lastName, country, city, phone }) => ({
    firstName,
    lastName,
    country,
    city,
    phone,
  })
);

export const activeDeliveryMethodSelector = createSelector(
  formDataSelector,
  (formData) => formData.deliveryMethod
);

export const activePaymentMethodSelector = createSelector(
  formDataSelector,
  (formData) => formData.paymentMethod
);
