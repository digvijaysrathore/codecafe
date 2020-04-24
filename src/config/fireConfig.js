import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDJHqhnw-rt0_tTgGkYOBSPif2Y4O_AnIk",
  authDomain: "nova-cafe.firebaseapp.com",
  databaseURL: "https://nova-cafe.firebaseio.com",
  projectId: "nova-cafe",
  storageBucket: "nova-cafe.appspot.com",
  messagingSenderId: "703130744942",
  appId: "1:703130744942:web:7fde5c75f0837a9f278e7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;