import React from 'react';
import PostsList from '../posts/postsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import '../../styles.css';

class Dashboard extends React.Component {
    render() {
        //console.log(this.props)
        const { posts } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <PostsList posts={posts} /> 
                </div>
                <div className="center">
                    <iframe className="center" src="https://docs.google.com/forms/d/e/1FAIpQLSfvDXNPgyAF-o1NH7PeiRxPZSB4sIRYH6c1ZWADqnQbsqFNSA/viewform?embedded=true" width="640" height="458" frameborder="0" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      posts: state.firestore.ordered.posts,
      auth: state.firebase.auth
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Dashboard);