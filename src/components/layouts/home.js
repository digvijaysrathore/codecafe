import React, { Component } from "react";
import gif from "../../assets/hero.gif";
import "../../styles.css";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    render (){
        const {auth} = this.props;
        if (auth.uid) return <Redirect to='/dashboard' />
        return (
            <div className="home">
                <section className="p-4">
                    <div className="container p-5">
                    <h4 className="text-white">WHY CODE ALONE <span>when</span> YOU CAN GO ON A CODEDATE &hearts;</h4>
                    <p>
                    </p>
                    <a className="text-white" href="https://github.com/digvijaysrathore/novacafe">@Github</a>
                    </div>
                </section>
                <section className="p-4 bg-white">
                    <div className="container p-5">
                    <h4 className="">&#128512;MEET YOUR CO-FOUNDER</h4>
                    <p className="">Meet like minded people in the cafe, who want to build that next big thing with you.</p>
                    <p className="">Join The Cafe</p>
                    <p className="">Browse Profiles</p>
                    <p className="">Talk To 'em!</p>
                    </div>
                </section>
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
)(Home);
