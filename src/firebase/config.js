import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvWTSXiW9vD3jFr1-V81T4ykzFE9qIeTE",
  authDomain: "testet-12ee8.firebaseapp.com",
  projectId: "testet-12ee8",
  storageBucket: "testet-12ee8.appspot.com",
  messagingSenderId: "1004581870156",
  appId: "1:1004581870156:web:b241bc3d323104b8fbf2e9",
  measurementId: "G-90HH8SHL3D"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
