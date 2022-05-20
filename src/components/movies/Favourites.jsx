import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "./../../store/movies/movies-slice.js";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./../../config/firebase";
import { useEffect } from "react";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favouriteMovies } = useSelector((state) => state.movies);

  const favMoviesRef = collection(db, "favMovies");

  const getFavFirebase = () => {
    getDocs(favMoviesRef)
      .then((snapshot) => {
        let favList = [];
        snapshot.docs.forEach((doc) => {
          favList.push(doc.data());
        });
        dispatch(setFavourites(favList));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getFavFirebase();
  }, []);

  const removeFav = (cardID) => {
    deleteDoc(doc(db, "favMovies", cardID)).then(() => getFavFirebase());
  };

  return (
    <div className="flex">
      {favouriteMovies.map((m) => (
        <div className="flex flex-col" key={m.imdbID}>
          <MovieCard
            title={m.Title}
            img={m.Poster}
            year={m.Year}
            id={m.imdbID}
          />
          <button className="bg-focus w-52" onClick={() => removeFav(m.imdbID)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
