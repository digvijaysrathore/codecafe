import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class Signup extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        title: "",
        img: "",
        stack: "",
        insta: "",
        github: "",
        love: "",
        project: "",
        bio: ""
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
            <div className="container mt-5">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="title" placeholder="Title, ex. designer, developer, frontend or backend, etc." />
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="bio" placeholder="Bio" />
                <small id="emailHelp" class="form-text text-muted">Tell people about you. What you are good at, what you like, etc. Ellaborate it as much as you can.</small>
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="img" placeholder="Profile Image Link" />
                <small id="emailHelp" class="form-text text-muted">Go on Instagram.com and open your profile image in new tab to copy the link.</small>
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="stack" placeholder="Tech stack" />
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="insta" placeholder="Instagram Link" />
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="github" placeholder="Github" />
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="love" placeholder="" />
                <small id="emailHelp" class="form-text text-muted">What you like the most?</small>
            </div>
            <div className="form-group">
                <input type="text" onChange={this.handleChange} class="form-control" id="project" placeholder="" />
                <small id="emailHelp" class="form-text text-muted">Your latest project.</small>
            </div>
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