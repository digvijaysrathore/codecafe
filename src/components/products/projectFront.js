import React from 'react';
import '../../styles.css';

const PostSummary = ({post}) => {
    if (post){
        return (
            <div>
            <div className="col s12 m6">
            <div className="card horizontal">
              <div className="card-image" >
                <img src={post.image} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                    <p className="black-text">{post.name}</p>
                    <p className="grey-text">{post.intro}</p>
                </div>
                <div className="card-action">
                  <a href={post.link}>Visit</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    } else {
        return (
            <div>
                <h1 classNameName="black-text">Damn! You have no internet.</h1>
            </div>
        )
    }
}

export default PostSummary;