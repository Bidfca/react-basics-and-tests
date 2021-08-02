import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function PostCard({
  cover, title, id, body,
}) {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content" key={id}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
