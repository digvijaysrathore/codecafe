import React from 'react';
import { NavLink } from 'react-router-dom';
import InLinks from './inlinks';
import OutLinks from './outlinks';
import { connect } from 'react-redux';

const ComponentNavbar = (props) => {
    const { auth, profile } = props
    const links = auth.uid ? <InLinks profile={profile} /> : <OutLinks />;
    return (
        <div>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <NavLink className="navbar-brand font-weight-bold" to="/">novacafe</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navlist">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navlist">
                        {links}
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