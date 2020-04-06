import React from 'react';
import Bit from './bit';
import Cafe from './cafedm';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import cafedm from './cafedm';

class Wall extends React.Component {
    render() {
        //console.log(this.props)
        const { chats } = this.props;
        return (
            <div className="container">
                <Cafe />
                <br />
                <div className="row">
                    <Bit chats={chats} /> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      chats: state.firestore.ordered.chats,
      auth: state.firebase.auth
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'chats' }
    ])
)(Wall);