import React from 'react';

const PostSummary = ({post}) => {
    return (
        <div className="card z-deepth-0 post-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{post.title}</span>
                    <p>Posted by Digvijay</p>
                    <p className="grey-text">3rd April 2020</p>
                </div>
            </div>
    )
}

export default PostSummary;