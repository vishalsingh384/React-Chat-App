// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6e937.firebaseapp.com",
  projectId: "reactchat-6e937",
  storageBucket: "reactchat-6e937.appspot.com",
  messagingSenderId: "935386200414",
  appId: "1:935386200414:web:9ecfbbbd522c9a581f37cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();
export const storage=getStorage();