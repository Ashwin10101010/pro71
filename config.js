import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyALoNgd-iHCvxzFLMUcq_xyWw3CZLW5OnE",
    authDomain: "pro-71-a1d38.firebaseapp.com",
    projectId: "pro-71-a1d38",
    storageBucket: "pro-71-a1d38.appspot.com",
    messagingSenderId: "509551667547",
    appId: "1:509551667547:web:b684f464ad146c9a03d27e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
