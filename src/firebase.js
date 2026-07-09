import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEydD9iT_h9K1-Tbaa-sTFGobinrAX5_Y",
  authDomain: "velox-manager.firebaseapp.com",
  databaseURL: "https://velox-manager-default-rtdb.firebaseio.com",
  projectId: "velox-manager",
  storageBucket: "velox-manager.firebasestorage.app",
  messagingSenderId: "297699253594",
  appId: "1:297699253594:web:8c2dbb23ee380c641a2763",
  measurementId: "G-7BP1YJB7Y1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const realtimeDb = getDatabase(app);

export default app;