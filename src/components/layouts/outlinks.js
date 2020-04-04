import React from 'react';
import { NavLink } from 'react-router-dom';

const OutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/join">Join</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}

export default OutLinks;