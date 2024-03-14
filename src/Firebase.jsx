import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";  


const firebaseConfig = {
  apiKey: "AIzaSyAdi2-KvLbdkR3JKbLLANOKYbhKdSmo_XI",
  authDomain: "chitchat-800d9.firebaseapp.com",
  projectId: "chitchat-800d9",
  storageBucket: "chitchat-800d9.appspot.com",
  messagingSenderId: "890426968321",
  appId: "1:890426968321:web:83a9cf0961b6ca6eddb300"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export  const db = getFirestore()