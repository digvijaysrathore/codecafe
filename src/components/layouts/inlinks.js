import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const InLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to="/write">Write</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-1">NN</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(InLinks);