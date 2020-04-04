import React from 'react';

const PostDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Title - {id}</span>
                    <p>This is an amazing dev post.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Digvijay</div>
                    <div>3rd April, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;