/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Router from './router/Router';
import { StoreContextProvider } from './store/StoreContext';

import './styles/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <Router>
        <App />
      </Router>
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
