import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCJBGOmT2SwOUFahaHKsjcgh7EVRgO2qAs",
    authDomain: "mayasite-f5cf4.firebaseapp.com",
    projectId: "mayasite-f5cf4",
    storageBucket: "mayasite-f5cf4.appspot.com",
    messagingSenderId: "653687148931",
    appId: "1:653687148931:web:a2d4238e07d858c4ba66b6",
    measurementId: "G-ZHRJWBR449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };