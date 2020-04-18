import React from 'react';
import ProfilesList from '../profiles/list';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to='/login' /> 

        console.log(this.props)
        const { users } = this.props;
        return (
            <div className="dashboard container mt-5">
                <div className="">
                    <ProfilesList users={users} /> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      users: state.firestore.ordered.users,
      auth: state.firebase.auth
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Dashboard);