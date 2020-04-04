import React from 'react';
import Notifs from './notifs';
import PostsList from '../posts/postsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component {
    render() {
        //console.log(this.props)
        const { posts } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostsList posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-ml">
                        <Notifs />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      posts: state.firestore.ordered.posts
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Dashboard);