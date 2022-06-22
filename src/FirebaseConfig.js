// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQDnjr1ostryP608Crswcu25DfzEfPeMc",
  authDomain: "the-canero-group-auth.firebaseapp.com",
  projectId: "the-canero-group-auth",
  storageBucket: "the-canero-group-auth.appspot.com",
  messagingSenderId: "806541821575",
  appId: "1:806541821575:web:08a2fb619741318da89a22",
  measurementId: "G-GBDVW3ESVN"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

export default FirebaseApp;
