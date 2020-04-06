import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        return (
            <div className="container">
                <br />
                <h4>Welcome back, let's code and launch!</h4>
                <form onSubmit={this.handleSubmit} >
                    <div className="input-field">
                        <label htmlFor="email">Mail ID</label>
                        <input type="email" id="email" className="white-text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="white-text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-1 z-depth-0">LOGIN</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(Signin);