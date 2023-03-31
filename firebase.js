// Import the functions you need from the SDKs you need
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDwIMObVVyYV_N73L1f59xCmm97ezgoKms",
//   authDomain: "fir-auth-ebdfe.firebaseapp.com",
//   projectId: "fir-auth-ebdfe",
//   storageBucket: "fir-auth-ebdfe.appspot.com",
//   messagingSenderId: "1069022777249",
//   appId: "1:1069022777249:web:29fa10c5a5aa801db605e0"
// };

// // Initialize Firebase

// // if (!firebase.apps.length) {
// //    firebase.initializeApp(firebaseConfig)
// // } else {
// //   app = firebase.app()
// // }
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// export { auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwIMObVVyYV_N73L1f59xCmm97ezgoKms",
  authDomain: "fir-auth-ebdfe.firebaseapp.com",
  projectId: "fir-auth-ebdfe",
  storageBucket: "fir-auth-ebdfe.appspot.com",
  messagingSenderId: "1069022777249",
  appId: "1:1069022777249:web:29fa10c5a5aa801db605e0"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };