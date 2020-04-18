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
            <div className="container mt-5">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input type="email" onChange={this.handleChange} class="form-control" id="email" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <input type="password" onChange={this.handleChange} class="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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