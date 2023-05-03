// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBPC7tEglN0M5OJYuc8adz-2ccXd6RvJ-U",
  // authDomain: "cuisine-wizard.firebaseapp.com",
  // projectId: "cuisine-wizard",
  // storageBucket: "cuisine-wizard.appspot.com",
  // messagingSenderId: "940085912926",
  // appId: "1:940085912926:web:d0ec219686f525f0711bcf"

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;