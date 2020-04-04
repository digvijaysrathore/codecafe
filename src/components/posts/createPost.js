import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';

class Write extends Component {
    state = {
        title: "",
        content: ""
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
        document.getElementById('done').innerHTML = "Posted Your New Article!"
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Write</label>
                        <input type="text" id="content" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">POST</button>
                    </div>
                    <p id="done"></p>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(Write);