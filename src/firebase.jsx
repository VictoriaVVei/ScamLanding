// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz8LIcb0RjvIS9K_0IYYcBWAlGtCwUCW4",
    authDomain: "scamslanding.firebaseapp.com",
    projectId: "scamslanding",
    storageBucket: "scamslanding.firebasestorage.app",
    messagingSenderId: "1019456283656",
    appId: "1:1019456283656:web:abbbe4483214e432ab1dbd",
    measurementId: "G-RMM8T487VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const cloudStore = getFirestore(app);