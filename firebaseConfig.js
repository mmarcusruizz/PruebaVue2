// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtoqcfQK3ekkIlvPvXKmJsXsCMtqMyWe8",
  authDomain: "pruebavue-d2d3a.firebaseapp.com",
  projectId: "pruebavue-d2d3a",
  storageBucket: "pruebavue-d2d3a.appspot.com",
  messagingSenderId: "400593128444",
  appId: "1:400593128444:web:59a939f6094743deb80079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app