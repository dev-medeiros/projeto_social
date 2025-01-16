import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEXc3CanmGtfax4vz3UWOcfoLU4Npffz8",
  authDomain: "projsocial-73b68.firebaseapp.com",
  projectId: "projsocial-73b68",
  storageBucket: "projsocial-73b68.appspot.com",
  messagingSenderId: "226762492660",
  appId: "1:226762492660:web:34c89a4c1242a6c21caca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };