import React from 'react';
import { Link } from 'react-router-dom';
import InLinks from './inlinks';
import OutLinks from './outlinks';

const ComponentNavbar = () => {
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">Devs</Link>
                <InLinks />
                <OutLinks />
            </div>
        </nav>
    )
}

export default ComponentNavbar;