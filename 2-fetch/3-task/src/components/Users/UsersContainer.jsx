import React from 'react';
import axios from 'axios';

import { SearchContext } from '../../searchContext';

import UsersList from './UsersList';
import CircularProgress from '../CircularProgress';

const UsersContainer = () => {
  const { searchQuery } = React.useContext(SearchContext);

  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [buttonIsVisible, setButtonVisibility] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`https://5c3755177820ff0014d92711.mockapi.io/users?page=${page}&limit=10`)
      .then(({ data }) => {
        if (!data.length) {
          setButtonVisibility(false);
        } else {
          setUsers(prevUsers => [...prevUsers, ...data]);
        }
      })
      .then(() => setLoading(false));
  }, [page]);

  const handleClick = () => {
    setPage(prevPage => ++prevPage);
  };

  if (loading) {
    return (
      <>
        <UsersList users={users} />
        <CircularProgress />
        <button disabled>Wait...</button>
      </>
    );
  }

  return (
    <>
      <UsersList users={users.filter(({ name, email }) => (name + ' ' + email).toLowerCase().includes(searchQuery))} />
      {buttonIsVisible && <button onClick={handleClick}>Next 10 users</button>}
    </>
  );
};

export default UsersContainer;
