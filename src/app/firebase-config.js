// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCOygkazO48V-L0GhNVRRU_lO6OnrinsA",
  authDomain: "electrorafaela-6353d.firebaseapp.com",
  databaseURL: "https://electrorafaela-6353d-default-rtdb.firebaseio.com",
  projectId: "electrorafaela-6353d",
  storageBucket: "electrorafaela-6353d.firebasestorage.app",
  messagingSenderId: "380225517519",
  appId: "1:380225517519:web:3524a888304708864584ba",
  measurementId: "G-M5DLDMB5V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };