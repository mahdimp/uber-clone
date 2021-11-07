// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBihB-TefAeFR2dc1POQ-U_2SQiuNXQjV8",
    authDomain: "uber-clone-d43f6.firebaseapp.com",
    projectId: "uber-clone-d43f6",
    storageBucket: "uber-clone-d43f6.appspot.com",
    messagingSenderId: "293855721665",
    appId: "1:293855721665:web:17a8c3d05192ac263ffc40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get provider
const provider = new GoogleAuthProvider(firebaseConfig);
const auth = getAuth();

export { app, provider, auth };
