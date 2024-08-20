import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyBmFkKEsDyWWUJX6hnqNxO20r_RbHQZ-bI",
  authDomain: "moizz-e02a6.firebaseapp.com",
  projectId: "moizz-e02a6",
  storageBucket: "moizz-e02a6.appspot.com",
  messagingSenderId: "409736535952",
  appId: "1:409736535952:web:32955e6ed4f56795255d15",
  measurementId: "G-CFC4KZ18CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db}