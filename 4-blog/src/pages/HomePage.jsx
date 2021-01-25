/* eslint-disable no-param-reassign */
import React from 'react';

import { fetchPosts } from '../api';
import CardList from '../components/CardList';
import Loader from '../components/Loader';

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetchPosts()
      .then((items) => setPosts(items))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <CardList posts={posts} />;
};

export default HomePage;
