import PropTypes from 'prop-types';

import Card from './Card';

const CardList = ({ posts }) => (
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
    {posts &&
      posts.map((item) => (
        <div className="col" key={item.id}>
          <Card post={item} />
        </div>
      ))}
  </div>
);

CardList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      name: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ).isRequired,
};

export default CardList;
