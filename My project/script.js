// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0i-SqMlCdINxqzj5cWfxhsGDFFCTtYZo",
  authDomain: "my-project-3f216.firebaseapp.com",
  projectId: "my-project-3f216",
  storageBucket: "my-project-3f216.firebasestorage.app",
  messagingSenderId: "904375299365",
  appId: "1:904375299365:web:079654849a7444a7487ecc",
  measurementId: "G-2ZZX44L686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);