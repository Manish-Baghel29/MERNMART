import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "mernmart-5dc8c.firebaseapp.com",
  projectId: "mernmart-5dc8c",
  storageBucket: "mernmart-5dc8c.firebasestorage.app",
  messagingSenderId: "586653333714",
  appId: "1:586653333714:web:cde13d37a433bed50a150b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

