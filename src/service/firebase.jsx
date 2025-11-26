// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7wYv7ydTHJhq62CDQbAONHsG_0xRA5do",
  authDomain: "react-highcat.firebaseapp.com",
  projectId: "react-highcat",
  storageBucket: "react-highcat.firebasestorage.app",
  messagingSenderId: "191148617502",
  appId: "1:191148617502:web:7200f3a606a9a0e13ba30f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
