// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzHMH3Zkbxt5ivAr4K51XtrZwv-c_TpJU",
  authDomain: "vimba-apps.firebaseapp.com",
  projectId: "vimba-apps",
  storageBucket: "vimba-apps.appspot.com",
  messagingSenderId: "1008119794668",
  appId: "1:1008119794668:web:f39cd69b7322cf3e474ec9",
  measurementId: "G-2TF0QDK0ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
