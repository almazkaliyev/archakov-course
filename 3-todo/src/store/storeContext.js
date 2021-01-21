/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { initialState, todoReducer } from './reducer';

export const StoreContext = React.createContext();

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem('store', JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider value={{ store: state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
