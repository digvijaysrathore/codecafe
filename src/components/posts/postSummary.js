import React from 'react';
import '../../styles.css';

const PostSummary = ({post}) => {
    if (post){
        return (
            <div className="card z-deepth-0 post-summary">
                    <div id="card" className="card-content white-text text-darken-3">
                        <span className="card-title">{post.title}</span>
                        <p>Posted by {post.authorName}</p>
                        <p className="grey-text"></p>
                    </div>
                </div>
        )
    } else {
        return (
            <div>
                <h1 className="white-text">Damn! You have no internet.</h1>
            </div>
        )
    }
}

export default PostSummary;