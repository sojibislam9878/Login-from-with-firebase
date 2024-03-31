// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUW4d6L9FLHv5D9vQgamiCzfnnA0xH9IA",
  authDomain: "login-form-with-firebase-d4d0f.firebaseapp.com",
  projectId: "login-form-with-firebase-d4d0f",
  storageBucket: "login-form-with-firebase-d4d0f.appspot.com",
  messagingSenderId: "653060065884",
  appId: "1:653060065884:web:50e9e0d4ba666d3eddb499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;