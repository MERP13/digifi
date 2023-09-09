// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF3Mk5DfoiHY4wCRY8uuizaB2Dqztjp7o",
  authDomain: "carbem-cf.firebaseapp.com",
  projectId: "carbem-cf",
  storageBucket: "carbem-cf.appspot.com",
  messagingSenderId: "331147305475",
  appId: "1:331147305475:web:7d3edc17610097496d2436",
  measurementId: "G-JTDSZFHZKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);