import { FaStar } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "./../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "./../../store/movies/apiFunctions";
import { useEffect, useState } from "react";

const FavouriteButtons = ({ imdbID }) => {
  const { user } = useSelector((state) => state.user);
  const { movieDetails, favouriteMovies } = useSelector( (state) => state.movies);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (favouriteMovies.find((m) => m["imdbID"] === imdbID)) setIsFav(true);
  },[favouriteMovies,imdbID,movieDetails]);

  const addToFav = async (movieID) => {
    //TryCatch because movieDetails should update first
    try {
      dispatch(fetchDetails(movieID));
    } catch (e) { console.log(e) }

    if (!favouriteMovies.find((m) => m["imdbID"] === movieID)) {
      await updateDoc(doc(db, "users", user.uid), {
        favMovies: arrayUnion(movieDetails),
      }).then(() => setIsFav(true));
    }
  };

  const removeFav = async (movieID) => {
    const newFavMovies = favouriteMovies.filter((m) => m.imdbID !== movieID);
    await updateDoc(doc(db, "users", user.uid), {
      favMovies: [...newFavMovies],
    });
    setIsFav(() => false);
  };

  return (
    <div className="flex text-xs text-secondary top-0 bg-nav bg-opacity-80 h-1/6 items-center justify-evenly hover:font-bold">
      {user ? ( isFav ? <div onClick={(e) => removeFav(e.target.id)} className="hover:cursor-pointer" id={imdbID} > Remove from Favourites </div> 
            : ( <div onClick={(e) => addToFav(e.target.id)} className="hover:cursor-pointer" id={imdbID} > Add to Favourites </div>))
            : ( <span className="text-focus">Log in to access Favourites</span>)}
         {user && <FaStar /> }
    </div>
  );
};

export default FavouriteButtons;
