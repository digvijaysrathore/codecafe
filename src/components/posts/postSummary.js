import React from 'react';

const PostSummary = ({post}) => {
    return (
        <div className="card z-deepth-0 post-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{post.title}</span>
                    <p>Posted by {post.authorName}</p>
                    <p className="grey-text"></p>
                </div>
            </div>
    )
}

export default PostSummary;