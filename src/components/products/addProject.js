import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class Write extends Component {
    state = {
        name: "",
        description: "",
        image: "", 
        intro: "",
        link: "",
        upvotes: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createPost(this.state)
    }
    render() {
        const { auth } = this.props;
        const profile = auth.profile;
        if (!auth.uid) return <Redirect to="/login" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name Of Your Materpiece</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <textarea id="link" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="link">Website/Landing Page/Project Link</label>
                    </div>
                    <div className="input-field">
                        <textarea id="intro" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="intro">What's your product in one line?</label>
                    </div>
                    <div className="input-field">
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="description">Describe, why, what, how, etc.</label>
                    </div>
                    <div className="input-field">
                        <textarea id="image" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="image">Link of your logo</label>
                    </div>
                    <div className="input-field">
                        <button className="btn purple darken-2 lighten-1 z-depth-0">ADD</button>
                    </div>
                    <p id="done"></p>
                </form>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write);