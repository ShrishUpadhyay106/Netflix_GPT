// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0zDiBOLmojREpkTb6HJq9exrxzm5cEGI",
  authDomain: "netflixgpt-acef3.firebaseapp.com",
  projectId: "netflixgpt-acef3",
  storageBucket: "netflixgpt-acef3.firebasestorage.app",
  messagingSenderId: "182080634742",
  appId: "1:182080634742:web:c24fd7723790f4d12f4457",
  measurementId: "G-3Z9V7CW90X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//as we need auth every where in the login so better to store here to just iport it and use 
export const auth = getAuth();