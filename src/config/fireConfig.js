import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBl7VEFPYp93nVLzTIgpRCnZSdIAvIBVSc",
    authDomain: "devs-7b261.firebaseapp.com",
    databaseURL: "https://devs-7b261.firebaseio.com",
    projectId: "devs-7b261",
    storageBucket: "devs-7b261.appspot.com",
    messagingSenderId: "654924319583",
    appId: "1:654924319583:web:d99c0be5a2ecad740b84ea",
    measurementId: "G-KETSTDHT10"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;