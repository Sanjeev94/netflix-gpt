// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe9aRtPxKbmmRKiWzrn2RXDH7YpZ43oX4",
  authDomain: "netflixgpt-99d09.firebaseapp.com",
  projectId: "netflixgpt-99d09",
  storageBucket: "netflixgpt-99d09.appspot.com",
  messagingSenderId: "308790255758",
  appId: "1:308790255758:web:9422b476e161e611a929df",
  measurementId: "G-R8X8QG2DP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();