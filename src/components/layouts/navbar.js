import React from 'react';
import { Link } from 'react-router-dom';
import InLinks from './inlinks';
import OutLinks from './outlinks';
import { connect } from 'react-redux';

const ComponentNavbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <InLinks profile={profile} /> : <OutLinks />;
    return (
        <div>
            <nav className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo left black-text"></Link>
                    { links }
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(ComponentNavbar);