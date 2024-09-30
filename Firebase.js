import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyCobGp8JPpT4sLqHbQUiGgk8vDBED0HlsE",
  authDomain: "appcripto-e2adb.firebaseapp.com",
  projectId: "appcripto-e2adb",
  storageBucket: "appcripto-e2adb.appspot.com",
  messagingSenderId: "836904622260",
  appId: "1:836904622260:web:2d05ce5c183a458f505fe1",
  measurementId: "G-F11NLV1ELD"
};


const app = initializeApp(firebaseConfig);
export const firestore= getFirestore(app);