// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-69edd.firebaseapp.com",
  projectId: "mern-estate-69edd",
  storageBucket: "mern-estate-69edd.appspot.com",
  messagingSenderId: "279780562155",
  appId: "1:279780562155:web:c54a11272d97f0e2345aae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
