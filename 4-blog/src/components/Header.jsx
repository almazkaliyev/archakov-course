/* eslint-disable no-param-reassign */
import React from 'react';

import PropTypes from 'prop-types';

import { fetchPostsByTitle } from '../api';
import NavLink from '../router/NavLink';
import { setPosts } from '../store/actionCreators';
import { useDispatch } from '../store/hooks';

const Header = ({ searchInputRef }) => {
  const dispatch = useDispatch();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value;
    searchInputRef.current.value = '';
    fetchPostsByTitle(query).then((res) => dispatch(setPosts(res)));
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit(e);
    }
  };

  return (
    <header className="shadow-sm">
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">
            <svg
              className="bi bi-megaphone me-2"
              fill="currentColor"
              height="24"
              style={{ marginTop: -8 }}
              viewBox="0 0 16 16"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975l1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
            </svg>
            NaniBlog
          </span>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/">
                  Статьи
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  О нас
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <input
                aria-label="Поиск"
                className="form-control me-2"
                onKeyDown={onKeyDown}
                placeholder="Поиск статьи..."
                ref={searchInputRef}
                type="search"
              />
              <button
                className="btn btn-outline-light"
                onClick={onSearchSubmit}
                type="button"
              >
                Найти
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  searchInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(React.Element) }),
  ]).isRequired,
};

export default Header;
