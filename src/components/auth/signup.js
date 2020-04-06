import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class Signup extends Component {
    state = {
        email: "",
        password: "",
        name: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        return (
            <div className="container">
                <br />
                <h4>Aha! We are waiting for you.</h4>
                <form onSubmit={this.handleSubmit} >
                    <div className="input-field">
                        <label htmlFor="email">Mail ID</label>
                        <input type="email" id="email" className="white-text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="white-text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="white-text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-1 z-depth-0">JOIN</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
}
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)