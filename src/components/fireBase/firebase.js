// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_eVxJ_VNP_r5c4N5nMlfTu1mV2Hmpbg4",
    authDomain: "eduzone-2306f.firebaseapp.com",
    projectId: "eduzone-2306f",
    storageBucket: "eduzone-2306f.firebasestorage.app",
    messagingSenderId: "564332071358",
    appId: "1:564332071358:web:1bbac1df734bc2cbb751ef",
    measurementId: "G-QWV8R7P371"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
