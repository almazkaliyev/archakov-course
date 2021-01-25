/* eslint-disable react/prop-types */
import React from 'react';

import RouterContext from './RouterContext';

const Route = (props) => (
  <RouterContext.Consumer>
    {(context) => {
      const location = props.location || context.location;
      const match = props.computedMatch;

      return (
        <RouterContext.Provider value={{ ...context, location, match }}>
          {match && React.createElement(props.component, props)}
        </RouterContext.Provider>
      );
    }}
  </RouterContext.Consumer>
);

export default Route;
