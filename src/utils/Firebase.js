// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb51GHEa9Pyhp1BS2uTG0p9BNdzDC2TAs",
  authDomain: "netflixgpt-93923.firebaseapp.com",
  projectId: "netflixgpt-93923",
  storageBucket: "netflixgpt-93923.appspot.com",
  messagingSenderId: "502794912800",
  appId: "1:502794912800:web:9684b2377b4b9ea0752845",
  measurementId: "G-VGM5ZJD57B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();