import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWSvdeSbakTYHfmNvgO4PKfPq-BAz9GtE",
    authDomain: "react-593d8.firebaseapp.com",
    projectId: "react-593d8",
    storageBucket: "react-593d8.appspot.com",
    messagingSenderId: "233158740694",
    appId: "1:233158740694:web:41ac7be2c267b3d8e61777"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };

