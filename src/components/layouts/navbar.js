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
            <nav className="nav-wrapper yellow lighten-1">
                <div className="container">
                    <p className="black-text">Read about the vision, team and the contributors of the platform, <a href="" className="blue-text">here</a>. Talk to the lead contributor, <a href="https://instagram.com/digvijaysrathore" target="_blank" className="blue-text">here</a>.</p>
                </div>
            </nav>
            <nav className="nav-wrapper black darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo left">[cafe]</Link>
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