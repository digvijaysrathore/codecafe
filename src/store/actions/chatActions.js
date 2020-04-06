import {Profiler} from 'react';

export const sendMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('chats').add({
            ...message,
            authorName: profile.name,
            authorInitials: profile.initials,
            authorId: authorId,
            sentAt: new Date()
        }).then(() => {
            dispatch({ type: 'SEND_MESSAGE', message })
        }).catch((err) => {
            dispatch({ type: 'MESSAGE_SENDING_ERROR', err })
        })
    }

};