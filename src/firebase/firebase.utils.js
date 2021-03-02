import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjlF96N_7CbUulyxoY76gePfjGcfz1XZI",
    authDomain: "react-ecommerce-39b56.firebaseapp.com",
    projectId: "react-ecommerce-39b56",
    storageBucket: "react-ecommerce-39b56.appspot.com",
    messagingSenderId: "299650502434",
    appId: "1:299650502434:web:e958f09ba08c84e0a55f7b",
    measurementId: "G-7LV2359H6S"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => { firebase.auth().signInWithPopup(provider) }

export default firebase;