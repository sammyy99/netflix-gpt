// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArpBlmrZWBOXebAlDuiQeS7oI2-cuVH-s",
  authDomain: "netflix-gpt-1e270.firebaseapp.com",
  projectId: "netflix-gpt-1e270",
  storageBucket: "netflix-gpt-1e270.appspot.com",
  messagingSenderId: "635577084064",
  appId: "1:635577084064:web:ebb9bbaa5f6e8cfb7d81c5",
  measurementId: "G-GB1QJM3W4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()