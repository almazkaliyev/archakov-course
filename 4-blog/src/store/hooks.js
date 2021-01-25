/* eslint-disable import/prefer-default-export */
import React from 'react';

import { StoreContext } from './StoreContext';

export const useDispatch = () => {
  const { dispatch } = React.useContext(StoreContext);
  return dispatch;
};
