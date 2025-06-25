import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGn6a0r588S5sZcO1_xWA8aD4WOdYs12U",
  authDomain: "morphomind.firebaseapp.com",
  projectId: "morphomind",
  storageBucket: "morphomind.firebasestorage.app",
  messagingSenderId: "763118796233",
  appId: "1:763118796233:web:0e1c1049d30dbb73257c18",
  measurementId: "G-VZ8REXC8KZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
