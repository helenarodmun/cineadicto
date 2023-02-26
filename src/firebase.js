import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyAiRVBwQTwSbgVbEYQYYWl5_HD7QS6oBBU",
  
    authDomain: "cineadicto-48190.firebaseapp.com",
  
    projectId: "cineadicto-48190",
  
    storageBucket: "cineadicto-48190.appspot.com",
  
    messagingSenderId: "985749804335",
  
    appId: "1:985749804335:web:6a067d2b5af956074dfdda"
  
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export {auth}
