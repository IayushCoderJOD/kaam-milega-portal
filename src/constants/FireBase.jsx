// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAugRd939Ps9EKyEkQivmDU4DQ_VSUOHWA",
    authDomain: "ayujob-search-9625d.firebaseapp.com",
    projectId: "ayujob-search-9625d",
    storageBucket: "ayujob-search-9625d.appspot.com",
    messagingSenderId: "856380713909",
    appId: "1:856380713909:web:cb5d3228cbd3c6e9f087fc",
    measurementId: "G-CDC6HL69X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();