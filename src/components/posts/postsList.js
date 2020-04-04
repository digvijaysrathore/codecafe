import React from 'react';
import PostSummary from './postSummary';

const PostsList = ({posts}) => {
    return (
        <div className="post-list section">
            { posts && posts.map(post => {
                return (
                    <PostSummary post={post} key={post.id} />
                )
            })}
        </div>
    )
} 

export default PostsList;