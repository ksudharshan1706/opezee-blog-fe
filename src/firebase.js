// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVKwH4qRocXWEP2IDdTu9LC-_D7octBfU",
  authDomain: "opezee-152ba.firebaseapp.com",
  projectId: "opezee-152ba",
  storageBucket: "opezee-152ba.appspot.com",
  messagingSenderId: "331261159794",
  appId: "1:331261159794:web:8f288c2a1d448f852515eb",
  measurementId: "G-XDX71ERKQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
