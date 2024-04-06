import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1cqVvn8TPJbUpwFebvr6NIQVhrvQOdrM",
    authDomain: "clone-1cd10.firebaseapp.com",
    projectId: "clone-1cd10",
    storageBucket: "clone-1cd10.appspot.com",
    messagingSenderId: "346989205349",
    appId: "1:346989205349:web:db6ad9455ee9f61ebdb38c",
    measurementId: "G-5KVNN8R4LR"
  };

  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore();
  const auth = getAuth(app);

  export { db, auth};