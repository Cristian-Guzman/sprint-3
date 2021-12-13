// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1zc4tC2MWKDPfUWhuyIKmmN0hESV50A4",
    authDomain: "sprint-3-amazoon.firebaseapp.com",
    projectId: "sprint-3-amazoon",
    storageBucket: "sprint-3-amazoon.appspot.com",
    messagingSenderId: "86863490326",
    appId: "1:86863490326:web:24573623fec40f9813f437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore(app);

export {db, google, facebook};