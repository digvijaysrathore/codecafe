import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const InLinks = (props) => {

    return (
        <ul className="right">
            <li><NavLink to="/write"><a class="waves-effect waves-light purple darken-2 btn">add project <i class="material-icons right">book</i></a></NavLink></li>
            <li><a className="black-text" onClick={props.signOut}>Logout</a></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(InLinks);