import React from 'react';

import PropTypes from 'prop-types';

import { initialState, reducer } from './reducer';

export const StoreContext = React.createContext();

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ store: state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
