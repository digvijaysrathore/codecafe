import React from 'react';
import { NavLink } from 'react-router-dom';

const OutLinks = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/join">Join</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
        </ul>
    )
}

export default OutLinks;