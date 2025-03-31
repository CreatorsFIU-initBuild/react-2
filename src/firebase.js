// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Firestore

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBmpmmmSXTqFRCEq4fxMUa5O0-Y3Telopc",
  authDomain: "creatorsfiu-7eb19.firebaseapp.com",
  projectId: "creatorsfiu-7eb19",
  storageBucket: "creatorsfiu-7eb19.firebasestorage.app",
  messagingSenderId: "275360596627",
  appId: "1:275360596627:web:24919f1e45128265334366",
  measurementId: "G-0P618W6LG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore

// Export the services to use in other parts of the app
export { auth, db }; // Now db is exported
