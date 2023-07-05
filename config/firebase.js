// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNinlN07hcicIdy2YDVxEtLSv5Uf1Br1k",
  authDomain: "chatter-app-e7cfd.firebaseapp.com",
  projectId: "chatter-app-e7cfd",
  storageBucket: "chatter-app-e7cfd.appspot.com",
  messagingSenderId: "572415965852",
  appId: "1:572415965852:web:4e452f665f55e447be0b59",
  measurementId: "G-G2V80HVTX0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);    