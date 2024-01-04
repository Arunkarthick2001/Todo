// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRogeH9S1s8d-nj0QcFnq2nqVOk3XmpR8",
  authDomain: "student-database-a9aac.firebaseapp.com",
  projectId: "student-database-a9aac",
  storageBucket: "student-database-a9aac.appspot.com",
  messagingSenderId: "158320268396",
  appId: "1:158320268396:web:38a09469dfa1cbcc9a7449",
  measurementId: "G-555JDK378C",
  databaseURL: "https://student-database-a9aac-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
