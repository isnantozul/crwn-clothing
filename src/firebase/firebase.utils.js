import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqZqJpRkflSL-SR5a5M1fH-5mDW4gmKlI",
    authDomain: "crwn-db-11e9e.firebaseapp.com",
    databaseURL: "https://crwn-db-11e9e.firebaseio.com",
    projectId: "crwn-db-11e9e",
    storageBucket: "crwn-db-11e9e.appspot.com",
    messagingSenderId: "917564442518",
    appId: "1:917564442518:web:1acee1c19a51d6b803bfb7",
    measurementId: "G-ZFR7MZBQC2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;