// Old  way of importing for firebase 7.19.0
// import firebase from 'firebase/compat/app'
// import 'firebase/firestore';
// import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc, query, where, setDoc, doc } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnH1cbfWVDzZ2mDxKx2wuO0GQ6p91lohg",
  authDomain: "presentit-bf2b5.firebaseapp.com",
  projectId: "presentit-bf2b5", 
  storageBucket: "presentit-bf2b5.appspot.com",
  messagingSenderId: "600980939856",
  appId: "1:600980939856:web:7ea567cec0f7d3c7b91d55",
  measurementId: "G-E9EVCRY6NX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = getAuth();
export const firestore = getFirestore(app);
// export const firestore = app.firestore();



export default app;