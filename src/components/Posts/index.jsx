import React from 'react';
import PostCard from '../PostCard';

function Posts({ posts }) {
    return (
        <div className="posts">
        {posts.map(({ cover, title, id, body }) => (
          <PostCard
            title={ title }
            cover={ cover }
            id={ id }
            body={ body } />
        ))}
      </div>
    )
}

export default Posts;