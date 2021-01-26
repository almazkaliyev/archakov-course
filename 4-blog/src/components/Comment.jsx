import ProgressiveImage from 'react-progressive-image';

import PropTypes from 'prop-types';

const AvatarPlaceholder = () => (
  <div
    className="me-2"
    style={{
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#c9d1d9',
    }}
  />
);

const Comment = ({ data }) => {
  const { avatar, name, text } = data;

  return (
    <div className="bg-light rounded p-3 mb-2">
      <div className="d-flex align-items-center mb-2 pb-2">
        <ProgressiveImage placeholder="" src={avatar}>
          {(src, loading) =>
            loading ? (
              <AvatarPlaceholder />
            ) : (
              <img
                alt={name}
                className="me-2"
                src={src}
                style={{ width: 24, height: 24, borderRadius: 12 }}
              />
            )
          }
        </ProgressiveImage>
        <span className="text-dark" style={{ fontSize: 13 }}>
          <strong>{name}</strong>
        </span>
      </div>
      <p className="mb-0">{text}</p>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Comment;
