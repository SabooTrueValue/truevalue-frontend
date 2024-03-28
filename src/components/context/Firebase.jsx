import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00efdyLD-L-SUYKDtsl_SRvEDjfmAKp4",
  authDomain: "sabootruevalue-12.firebaseapp.com",
  projectId: "sabootruevalue-12",
  storageBucket: "sabootruevalue-12.appspot.com",
  messagingSenderId: "428377692266",
  appId: "1:428377692266:web:323d90ee41282466035213"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

// Obtain the Firebase Authentication instance
const FirebaseAuth = getAuth(FirebaseApp);

// Obtain the Firestore instance
const FirebaseStore = getFirestore(FirebaseApp);

// Obtain the Firebase Storage instance
const FirebaseStorage = getStorage(FirebaseApp);

export { FirebaseApp, FirebaseAuth, FirebaseStore, FirebaseStorage,getFirestore };
