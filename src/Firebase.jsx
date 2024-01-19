import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQP6ztOEmpZWrwoD4qyHH2StrNhasUyuk",
  authDomain: "code-collaboration-app.firebaseapp.com",
  projectId: "code-collaboration-app",
  storageBucket: "code-collaboration-app.appspot.com",
  messagingSenderId: "582549734010",
  appId: "1:582549734010:web:4fb4007d5506f5272fb1c3",
  measurementId: "G-T20HBW9JN0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
