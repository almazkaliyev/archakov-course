/* eslint-disable no-param-reassign */
import React from 'react';

import { fetchPosts } from '../api';
import CardList from '../components/CardList';
import Loader from '../components/Loader';
import { setPosts } from '../store/actionCreators';
import { StoreContext } from '../store/StoreContext';

const HomePage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { items } = store;
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    fetchPosts()
      .then((res) => dispatch(setPosts(res)))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <CardList posts={items} />;
};

export default HomePage;
