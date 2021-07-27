import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import './styles.css';

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map(({
        cover, title, id, body,
      }) => (
        <PostCard
          key={id}
          title={title}
          cover={cover}
          id={id}
          body={body}
        />
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.string.isRequired,
};

export default Posts;
