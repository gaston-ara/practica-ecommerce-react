// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI9B8pS_2zA-_F2SFvYOTacOWdKvwHW_k",
    authDomain: "fir-app-d490a.firebaseapp.com",
    projectId: "fir-app-d490a",
    storageBucket: "fir-app-d490a.appspot.com",
    messagingSenderId: "344512881198",
    appId: "1:344512881198:web:b95c87bfa5e5fa4c0cb5bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addItem = (callback) => addDoc(collection(db, "items"), {callback})
export const getItem = () => getDocs(collection(db, "items"));
export const onGetItem = (callback) => onSnapshot(collection(db, "items"), callback); 