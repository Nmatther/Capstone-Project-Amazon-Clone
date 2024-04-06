const firebase = require('firebase');
const firebaseui = require('firebaseui');

const firebaseConfig = {
    apiKey: "AIzaSyA1cqVvn8TPJbUpwFebvr6NIQVhrvQOdrM",
    authDomain: "clone-1cd10.firebaseapp.com",
    projectId: "clone-1cd10",
    storageBucket: "clone-1cd10.appspot.com",
    messagingSenderId: "346989205349",
    appId: "1:346989205349:web:db6ad9455ee9f61ebdb38c",
    measurementId: "G-5KVNN8R4LR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = getFirestore();
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  export { db, ui};