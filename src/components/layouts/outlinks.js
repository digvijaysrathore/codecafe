import React from 'react';
import { NavLink } from 'react-router-dom';

const OutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/join">Join <span>&#129312;</span></NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}

export default OutLinks;