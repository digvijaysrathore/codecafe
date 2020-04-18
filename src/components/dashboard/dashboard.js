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
            <div>
            <nav className="navbar navbar-expand-md navbar-dark">
                    <p className="text-white text-center">Join Nova Cafe Discord channel, <a href="https://discord.gg/mxzceH">here</a></p>
                </nav>
            <div className="dashboard container mt-5">
                <div className="">
                    <ProfilesList users={users} /> 
                </div>
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