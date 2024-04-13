// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyqPM65vk3MPnL_NrO47G-HymAhzE3kLk",
  authDomain: "netflixgpt-9048c.firebaseapp.com",
  projectId: "netflixgpt-9048c",
  storageBucket: "netflixgpt-9048c.appspot.com",
  messagingSenderId: "548724155960",
  appId: "1:548724155960:web:0aa7a6640fc3e743ebe8cd",
  measurementId: "G-KNLL17M01C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
