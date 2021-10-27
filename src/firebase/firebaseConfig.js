
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5nhBROkP7UaEUTW9TNqi8nP0hTFqmHdI",
  authDomain: "genious-car-mechanics-84f7d.firebaseapp.com",
  projectId: "genious-car-mechanics-84f7d",
  storageBucket: "genious-car-mechanics-84f7d.appspot.com",
  messagingSenderId: "472482951472",
  appId: "1:472482951472:web:7a4a73b337c0d0254b58f5"
};

// Initialize Firebase
const  initializeAutentication = ()=>{
    initializeApp(firebaseConfig);

}
export default initializeAutentication