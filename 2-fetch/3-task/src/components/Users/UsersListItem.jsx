const UsersListItem = ({ user }) => {
  const { name, email } = user;

  return (
    <li className="users__item">
      <h5 className="users__item-name">{name}</h5>
      <span className="users__item-email">{email}</span>
    </li>
  );
};

export default UsersListItem;
