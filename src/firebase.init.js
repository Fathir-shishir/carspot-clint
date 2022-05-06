// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2SrFVWmre-H0kQ3KCQPnWk7tKafu8bvE",
  authDomain: "carspot-9a307.firebaseapp.com",
  projectId: "carspot-9a307",
  storageBucket: "carspot-9a307.appspot.com",
  messagingSenderId: "696938245438",
  appId: "1:696938245438:web:f893604e90e20757dc106f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth