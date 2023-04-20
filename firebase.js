// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFaxT3mRHPYvbBtHyT8X5b6mcIw06C--w",
  authDomain: "nextjs-redux-crud-e9179.firebaseapp.com",
  projectId: "nextjs-redux-crud-e9179",
  storageBucket: "nextjs-redux-crud-e9179.appspot.com",
  messagingSenderId: "734266761272",
  appId: "1:734266761272:web:bc3028fda1b5a51eefc6cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
