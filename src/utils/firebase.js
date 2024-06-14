// Import the functions you need from the SDKs you need
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRhXFpHaojGw2R3pE1cf5I5A6OiOwijs8",
  authDomain: "netflixgpt-aryan.firebaseapp.com",
  projectId: "netflixgpt-aryan",
  storageBucket: "netflixgpt-aryan.appspot.com",
  messagingSenderId: "91619392381",
  appId: "1:91619392381:web:e1eb7d56392e88b2886a14",
  measurementId: "G-S9N5RM1P8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// As this is required by all api in firebase so we're creating it single time seperately..
export const auth = getAuth();
export const provider = new GoogleAuthProvider();