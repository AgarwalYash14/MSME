// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBA1GdFj_MLTew7T3Hdm_aDhj5q_IY169U",
    authDomain: "msme-ccmp.firebaseapp.com",
    projectId: "msme-ccmp",
    storageBucket: "msme-ccmp.appspot.com",
    messagingSenderId: "709749295627",
    appId: "1:709749295627:web:e92fa18a740f87f0f7d50e",
    measurementId: "G-FRYKCL7E87",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
