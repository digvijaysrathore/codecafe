import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const InLinks = (props) => {

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">CodeDate</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={props.signOut}>Logout</a>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(InLinks);