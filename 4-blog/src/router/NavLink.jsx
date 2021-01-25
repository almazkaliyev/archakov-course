import PropTypes from 'prop-types';

import RouterContext from './RouterContext';
import { matchPath } from './utils';

const NavLink = ({ to, children, className, activeClassName }) => (
  <RouterContext.Consumer>
    {(context) => {
      const { location } = context;
      const match = matchPath(location.pathname, to);

      return (
        <a
          className={`${className} ${
            match && match.isExact && activeClassName
          }`}
          href={to}
        >
          {children}
        </a>
      );
    }}
  </RouterContext.Consumer>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired,
};

export default NavLink;
