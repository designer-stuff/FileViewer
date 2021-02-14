/*
TODO:
1. Read the data
*/

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAak2bd9qnz-BJNuTEV-KTeR-PEzZhRCxw",
  authDomain: "tutorbin-64c27.firebaseapp.com",
  projectId: "tutorbin-64c27",
  storageBucket: "tutorbin-64c27.appspot.com",
  messagingSenderId: "364923033029",
  appId: "1:364923033029:web:2b116c4d718c67a90ba7ac",
  measurementId: "G-1M5HW3ZZTS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
