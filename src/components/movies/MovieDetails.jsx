import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDetails } from "./../../store/movies/apiFunctions.js";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "./../../config/firebase";

const MovieDetails = () => {
  const { movieDetails } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const addToFav = async () => {
      await updateDoc(doc(db,"users",user.uid),{favMovies:arrayUnion(movieDetails)})
  };

  return (
    <div className="absolute top-16">
      <h1>Details</h1>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt="Poster" />
      <button onClick={addToFav} className="bg-focus">
        Add to Favourites
      </button>
      <p> {movieDetails.Plot} </p>
    </div>
  );
};

export default MovieDetails;
