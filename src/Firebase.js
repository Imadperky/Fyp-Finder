// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPw0eEnK6-mMPF6d_eBP8uZpHmDBnnDFY",
  authDomain: "fyp-finder-fe988.firebaseapp.com",
  projectId: "fyp-finder-fe988",
  storageBucket: "fyp-finder-fe988.firebasestorage.app",
  messagingSenderId: "546114612675",
  appId: "1:546114612675:web:4ef2e2a9b43e2f0fb0e176",
  measurementId: "G-FF21B0HVML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);