import React from 'react';

import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import RouterContext from './RouterContext';

const Router = ({ children }) => {
  const history = createBrowserHistory();

  const computeRootMatch = (pathname) => ({
    path: '/',
    url: '/',
    params: {},
    isExact: pathname === '/',
  });

  return (
    <RouterContext.Provider
      value={{
        location: history.location,
        match: computeRootMatch(history.location.pathname),
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
