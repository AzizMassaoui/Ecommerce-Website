import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/////////////////////////////////////////////////////////////////

const firebaseConfig = {
  apiKey: "AIzaSyD4zTn-eWjyhpE54NZDlHFz23h9h3KDI6Y",
  authDomain: "vuejsproject-8e6a3.firebaseapp.com",
  projectId: "vuejsproject-8e6a3",
  storageBucket: "vuejsproject-8e6a3.appspot.com",
  messagingSenderId: "1044458110208",
  appId: "1:1044458110208:web:5d4fff8a6e49eb412807e5",
  measurementId: "G-LW4W5D73SG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
export const auth = getAuth();
