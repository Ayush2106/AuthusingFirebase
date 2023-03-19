// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaO5IZCr9dLVrtZKVtNb3NjcgPleDoKRM",
  authDomain: "auth-2023-d2de1.firebaseapp.com",
  projectId: "auth-2023-d2de1",
  storageBucket: "auth-2023-d2de1.appspot.com",
  messagingSenderId: "918775644716",
  appId: "1:918775644716:web:c6c5c0272454af691b8789",
  measurementId: "G-179JCYXG2T"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}
// export default auth;
