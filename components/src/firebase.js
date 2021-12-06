//import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyD8ejqOD6MGvR0cGR1TslXGNdpX-57bt3M",
    authDomain: "fir-app-570d7.firebaseapp.com",
    projectId: "fir-app-570d7",
    storageBucket: "fir-app-570d7.appspot.com",
    messagingSenderId: "483066667683",
    appId: "1:483066667683:web:fde991e0b2c98b44061516"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;