import React from 'react';
import { Link } from 'react-router-dom';
import InLinks from './inlinks';
import OutLinks from './outlinks';
import { connect } from 'react-redux';

const ComponentNavbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <InLinks profile={profile} /> : <OutLinks />;
    return (
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to="/" className="brand-logo left"><span>&#128516; [cafe]</span></Link>
                { links }
            </div>
        </nav>
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