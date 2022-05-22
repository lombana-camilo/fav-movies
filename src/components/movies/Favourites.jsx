import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "./../../store/movies/movies-slice.js";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "./../../config/firebase";
import { useEffect } from "react";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favouriteMovies } = useSelector((state) => state.movies);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
  //   // Reference to doc with user id
    const favMoviesRef = doc(db, "users", user.uid);
  //   //RealTime collection data SnapShot (instead of getDocs), callback executes when collection changes
    onSnapshot(favMoviesRef, (snapshot) => {
         if (snapshot.data().favMovies) {
            dispatch(setFavourites(snapshot.data().favMovies));
         }
    });
  }, [dispatch]);

  const removeFav = async (movieID) => {
    const newFavMovies = favouriteMovies.filter((m) => m.imdbID !== movieID);
    await updateDoc(doc(db, "users", user.uid), {
      favMovies: [...newFavMovies],
    });
  };

  return (
    <>
      <h1 className="absolute inset-y-20 items-center w-full font-bold text-2xl text-secondary text-center">
        Your Favourite Movies
      </h1>
      <div className="flex inset-y-28 absolute">
        {favouriteMovies.map((m) => (
          <div className="flex flex-col" key={m.imdbID}>
            <MovieCard
              title={m.Title}
              img={m.Poster}
              year={m.Year}
              id={m.imdbID}
            />
            <div>
              <button className="bg-focus w-52" onClick={() => removeFav(m.imdbID)} > Remove </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
