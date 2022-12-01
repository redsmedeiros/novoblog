// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1yUAlYFzmSsJnyBFoxoVL8PgpDkWpjy4",
  authDomain: "miniblog-f4098.firebaseapp.com",
  projectId: "miniblog-f4098",
  storageBucket: "miniblog-f4098.appspot.com",
  messagingSenderId: "253087538106",
  appId: "1:253087538106:web:345f2638e966e01e865b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }