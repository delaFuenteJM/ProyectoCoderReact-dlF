import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyB39KiHi7z78R0YepAZGSK04MDXJwSL-n0",
  authDomain: "muju-db.firebaseapp.com",
  projectId: "muju-db",
  storageBucket: "muju-db.firebasestorage.app",
  messagingSenderId: "264585229061",
  appId: "1:264585229061:web:9a4a7a2629e1271af2fd6c"
};

export const app = initializeApp(firebaseConfig)
