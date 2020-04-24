export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                ...newUser,
                name: newUser.name,
                title: newUser.title,
                stack: newUser.stack,
                instagram: newUser.insta,
                github: newUser.github,
                love: newUser.love,
                project: newUser.project,
                img: newUser.img,
                initials: newUser.name[0] + newUser.name[1]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS', newUser})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}