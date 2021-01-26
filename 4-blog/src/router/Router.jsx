import React from 'react';

import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import RouterContext from './RouterContext';

const Router = ({ children }) => {
  const history = createBrowserHistory();
  const [location, setLocation] = React.useState(history.location);

  const computeRootMatch = (pathname) => ({
    path: '/',
    url: '/',
    params: {},
    isExact: pathname === '/',
  });

  React.useEffect(() => {
    history.listen((currentLocation) => setLocation(currentLocation));
  }, []);

  return (
    <RouterContext.Provider
      value={{
        history,
        location,
        match: computeRootMatch(location.pathname),
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
