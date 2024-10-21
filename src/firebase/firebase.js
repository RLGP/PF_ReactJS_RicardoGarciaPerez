// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aperture-science-13a2c.firebaseapp.com",
  projectId: "aperture-science-13a2c",
  storageBucket: "aperture-science-13a2c.appspot.com",
  messagingSenderId: "900897931061",
  appId: "1:900897931061:web:b4b2fccc062ff13519567c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export const createOrder = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};