import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer.jsx";
import MoviesList from "./components/movies/MoviesList.jsx";
import MovieDetails from "./components/movies/MovieDetails.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Favourites from "./components/movies/Favourites";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/user/user-slice";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { setFavourites } from "./store/movies/movies-slice";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    //Check if a user is logged and sync user store to firestore
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            username: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  useEffect(() => {
      //Sync favmovies from firestore
      try {
    // Reference to doc with user id
    const favMoviesRef = doc(db, "users", user.uid);
    //RealTime collection data SnapShot (instead of getDocs), callback executes when collection changes
    onSnapshot(favMoviesRef, (snapshot) => {
         if (snapshot.data().favMovies) {
            dispatch(setFavourites(snapshot.data().favMovies));
         }
    });
      } catch (e) { }
  }, [dispatch,user]);

  return (
    <div className="bg-bg h-screen text-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
