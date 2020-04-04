import React from 'react';
import { Link } from 'react-router-dom';
import InLinks from './inlinks';
import OutLinks from './outlinks';
import { connect } from 'react-redux';

const ComponentNavbar = () => {
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left">[code]</Link>
                <InLinks />
                <OutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(ComponentNavbar);