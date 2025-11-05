import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5vHRs7NnI1SiJ7yHBtYXWcJgKgovNQ4s",
  authDomain: "school-app-f56fe.firebaseapp.com",
  projectId: "school-app-f56fe",
  storageBucket: "school-app-f56fe.appspot.com", // ✅ هنا التعديل المهم
  messagingSenderId: "887361785385",
  appId: "1:887361785385:web:1a200ee156d829d6ba5638",
  measurementId: "G-2822FK091M"
};

// لا تعيد التهيئة إذا كانت تمت مسبقًا
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
