// firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth"; // Import Firebase Authentication if you need it
import "firebase/firestore"; // Import Firebase Firestore if you need it

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbdPQclhUYNtMK4qJh0nJ-5QhXcHtlh1w",
  authDomain: "nist-a4a42.firebaseapp.com",
  projectId: "nist-a4a42",
  storageBucket: "nist-a4a42.appspot.com",
  messagingSenderId: "659627474379",
  appId: "1:659627474379:web:0a5a7c15754762a5680a4e",
  measurementId: "G-4NW41XYGKW"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the default app
}

export default firebase;
