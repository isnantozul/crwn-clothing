import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClGjBQkKH0_TEMasH8z8ogRG1-AuG2TQo",
    authDomain: "shop-db-1ceaa.firebaseapp.com",
    databaseURL: "https://shop-db-1ceaa.firebaseio.com",
    projectId: "shop-db-1ceaa",
    storageBucket: "shop-db-1ceaa.appspot.com",
    messagingSenderId: "1019681884076",
    appId: "1:1019681884076:web:0c647646167e42fd2b9c09",
    measurementId: "G-PRZP6JPQQR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;