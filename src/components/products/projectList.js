import React from 'react';
import PostSummary from './projectFront';
import { Link } from 'react-router-dom';

const PostsList = ({posts}) => {
    return (
        <div className="post-list section">
            { posts && posts.map(post => {
                return (
                    <Link to={'/post/' + post.id}>
                        <PostSummary post={post} key={post.id} />
                    </Link>
                )
            })}
        </div>
    )
} 

export default PostsList;