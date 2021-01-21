import React from 'react';

import { SearchContextProvider } from './searchContext';

import UsersContainer from './components/Users/UsersContainer';
import SearchInput from './components/SearchInput';

import './styles/app.scss';

function App() {
  return (
    <main className="main container">
      <div className="paper">
        <SearchContextProvider>
          <SearchInput />        
          <UsersContainer />
        </SearchContextProvider>
      </div>
    </main>
  );
};

export default App;
