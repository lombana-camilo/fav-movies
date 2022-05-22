import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBcj6Fur7MVq9ucK_AqLip6Y3VJIVfaKQ",
  authDomain: "my-movies-list-acfce.firebaseapp.com",
  projectId: "my-movies-list-acfce",
  storageBucket: "my-movies-list-acfce.appspot.com",
  messagingSenderId: "925003088304",
  appId: "1:925003088304:web:0b100bc886f9db20f65675",
  measurementId: "G-SMESDWH1H3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//Init firestore services
//database conector
export const db = getFirestore();

//Reference to specific collections
// export const favMoviesRef = collection(db, "favMovies");
