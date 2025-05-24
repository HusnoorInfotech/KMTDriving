// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkTrx0vuAm0slOn9Uh47RdAx6sOGjtxOs",
  authDomain: "drive-d2b93.firebaseapp.com",
  projectId: "drive-d2b93",
  storageBucket: "drive-d2b93.firebasestorage.app",
  messagingSenderId: "594663440238",
  appId: "1:594663440238:web:8145311a8b44ec9f480b7f",
  measurementId: "G-XJEVTY5YQH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
