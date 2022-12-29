import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC7AZPw7I6tJoYVBkMIs5v3SWXcb9ffTm8",
    authDomain: "job-listing-4fa24.firebaseapp.com",
    projectId: "job-listing-4fa24",
    storageBucket: "job-listing-4fa24.appspot.com",
    messagingSenderId: "757119850877",
    appId: "1:757119850877:web:e81f7c071d1c647ce69414"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 export const db=getFirestore(app)