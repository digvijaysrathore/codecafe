import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../store/actions/chatActions';
import { Redirect } from 'react-router-dom';


class Cafe extends Component {
    state = {
        message: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.sendMessage(this.state);
        this.message.value = "";
    }
    render() {
        const { auth } = this.props;
        const profile = auth.profile;
        if (!auth.uid) return <Redirect to="/login" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message" ref={(ref) => this.mainInput= ref} className="white-text" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">SEND</button>
                    </div>
                </form>
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
        sendMessage: (message) => dispatch(sendMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);
