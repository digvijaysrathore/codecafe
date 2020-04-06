import authReducer from './authReducer';
import postReducer from './postReducer';
import sendMessage from './chatReducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    send: sendMessage,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;