// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjzR8R0AArHDjbCMdrmZlzKI7lelPpi38",
  authDomain: "ema-john-simple-b1663.firebaseapp.com",
  projectId: "ema-john-simple-b1663",
  storageBucket: "ema-john-simple-b1663.appspot.com",
  messagingSenderId: "496507043715",
  appId: "1:496507043715:web:3acf8e29598d3f378c80b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export  default auth;