import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRpx_N38F8Aj6FpOgqS4Nk0UYMNhFcMBI",
    authDomain: "moody-ef1d6.firebaseapp.com",
    projectId: "moody-ef1d6",
    storageBucket: "moody-ef1d6.appspot.com",
    messagingSenderId: "769066679144",
    appId: "1:769066679144:web:e2200028b5473951d074dd",
    measurementId: "G-Q8VV33J1Z3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and pass in the app instance
export const db = getFirestore(app);
