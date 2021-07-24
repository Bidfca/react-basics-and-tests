import React from 'react';

function PostCard({ cover, title, id, body }) {
    return (
        <div className="post">
            <img src={ cover } alt={ title } />
            <div className="post-content" key={ id }>
                <h1>{ title }</h1>
                <p>{ body }</p>
            </div>
        </div>
    )
}

export default PostCard;