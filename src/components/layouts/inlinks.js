import React from 'react';
import { NavLink } from 'react-router-dom';

const InLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/write">Write</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-1">NN</NavLink></li>
        </ul>
    )
}

export default InLinks;