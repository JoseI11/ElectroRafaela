import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database"

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };