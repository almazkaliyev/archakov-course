/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { pathToRegexp } from 'path-to-regexp';

const compilePath = (path, options) => {
  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = { regexp, keys };

  return result;
};

export const matchPath = (pathname, options = {}) => {
  if (typeof options === 'string' || Array.isArray(options)) {
    options = { path: options };
  }

  const { path, exact = false } = options;

  const paths = [].concat(path);

  return paths.reduce((matched, currentPath) => {
    if (!currentPath && currentPath !== '') return null;
    if (matched) return matched;

    const { regexp, keys } = compilePath(currentPath, { end: exact });
    const match = regexp.exec(pathname);

    if (!match) return null;

    const [url, ...values] = match;
    const isExact = pathname === url;

    if (exact && !isExact) return null;

    return {
      path: currentPath, // the path used to match
      url: currentPath === '/' && url === '' ? '/' : url, // the matched portion of the URL
      isExact, // whether or not we matched exactly
      params: keys.reduce((memo, key, index) => {
        memo[key.name] = values[index];
        return memo;
      }, {}),
    };
  }, null);
};
