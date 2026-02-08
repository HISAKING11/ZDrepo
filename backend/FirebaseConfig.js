// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqYUnuR1GEHTdFQNO_AddFNfmk1qNDq7s",
  authDomain: "zdart-be7e5.firebaseapp.com",
  projectId: "zdart-be7e5",
  storageBucket: "zdart-be7e5.firebasestorage.app",
  messagingSenderId: "651230698600",
  appId: "1:651230698600:web:c34873e432283b5be76fdd",
  measurementId: "G-MB2MCYLZNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);