import UsersListItem from './UsersListItem';

const UsersList = ({ users }) => {
  return (
    <ul className="users">
      {users.map(user => (
        <UsersListItem user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default UsersList;
