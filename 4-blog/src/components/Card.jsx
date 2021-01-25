import ProgressiveImage from 'react-progressive-image';

import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

const CardImagePlaceholder = () => (
  <div
    className="card-img-top"
    style={{ height: 220, backgroundColor: '#c9d1d9' }}
  />
);

const Card = ({ post }) => {
  const { id, image, title, text, name, createdAt } = post;

  return (
    <div className="card">
      <ProgressiveImage placeholder="" src={image}>
        {(src, loading) =>
          loading ? (
            <CardImagePlaceholder />
          ) : (
            <img alt={title} className="card-img-top" src={src} />
          )
        }
      </ProgressiveImage>
      <div className="card-body">
        <h5 className="card-title">
          <a href={`/posts/${id}`}>{title}</a>
        </h5>
        <p className="card-text">{text}</p>
      </div>
      <div
        className="card-footer text-muted d-flex justify-content-between"
        style={{ fontSize: 13 }}
      >
        <div className="d-inline-flex align-items-center">
          <i
            className="bi bi-person-fill d-inline-flex align-items-center me-2"
            style={{ fontSize: 16 }}
          />
          <span>{name}</span>
        </div>
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-calendar-event-fill d-inline-flex align-items-center me-2" />
          <span>
            {formatDistance(Date.parse(createdAt), new Date(), {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default Card;
