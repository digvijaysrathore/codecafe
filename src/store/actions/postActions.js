import { Profiler } from "react";

export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            authorName: profile.name,
            authodId: authorId,
            upvotes: 1,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post});
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err })
        })
    }
};