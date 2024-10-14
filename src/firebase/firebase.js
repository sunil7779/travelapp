// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjk8D3NW7WLDTs545I9__XAJfXLLv11Ok",
  authDomain: "travel-app-d439a.firebaseapp.com",
  projectId: "travel-app-d439a",
  storageBucket: "travel-app-d439a.appspot.com",
  messagingSenderId: "255067651300",
  appId: "1:255067651300:web:bbdf802de2145416e640f1",
  measurementId: "G-C28G2P3S7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services (auth, db, app)
export { auth, db };
