import React from 'react';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Route from './router/Route';
import Switch from './router/Switch';

const App = () => {
  const searchInputRef = React.useRef();

  return (
    <>
      <Header searchInputRef={searchInputRef} />
      <main className="container mt-4 pb-4">
        <Switch>
          <Route
            component={HomePage}
            exact
            path="/"
            searchInputRef={searchInputRef}
          />
          <Route component={AboutPage} path="/about" />
          <Route component={PostPage} exact path="/posts/:id(\d+)" />
        </Switch>
      </main>
    </>
  );
};

export default App;
