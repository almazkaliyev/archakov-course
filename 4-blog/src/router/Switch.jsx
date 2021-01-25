/* eslint-disable react/prop-types */
import React from 'react';

import RouterContext from './RouterContext';
import { matchPath } from './utils';

const Switch = (props) => (
  <RouterContext.Consumer>
    {(context) => {
      const location = props.location || context.location;
      let element;
      let match;

      React.Children.forEach(props.children, (child) => {
        if (match == null && React.isValidElement(child)) {
          element = child;

          const path = child.props.path || child.props.from;

          match = path
            ? matchPath(location.pathname, { ...child.props, path })
            : context.match;
        }
      });

      return (
        match && React.cloneElement(element, { location, computedMatch: match })
      );
    }}
  </RouterContext.Consumer>
);

export default Switch;
