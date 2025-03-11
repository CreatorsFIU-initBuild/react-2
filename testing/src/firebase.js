// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFZw2TahZhOFZkTaZedRw6i9HfsuSCPt0",
  authDomain: "creatorsfiu.firebaseapp.com",
  projectId: "creatorsfiu",
  storageBucket: "creatorsfiu.firebasestorage.app",
  messagingSenderId: "440003757353",
  appId: "1:440003757353:web:fe8f9a57369ca0a0772338",
  measurementId: "G-XC8KJETGQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export {auth};